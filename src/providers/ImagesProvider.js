import React from 'react';
import queryString from 'query-string';

const ImagesContext = React.createContext();

class ImagesProvider extends React.Component {

  constructor( props ) {
    super( props );

    // Bind this custom methods
    this.fetchImagePage = this.fetchImagePage.bind( this );
    this.setImagePage = this.setImagePage.bind( this );

    // Import environment details
    this.endpoint = process.env.REACT_APP_API_URL;
    this.apiKey = process.env.REACT_APP_API_KEY;

    // Pre-configure request parameters
    this.defaultRequestOptions = {
      consumer_key: this.apiKey,
      feature: 'popular',
      image_size: '30,1600',
    };

    // Initialize State, expose setImagePage method
    this.state = { setImagePage: this.setImagePage };
  }

  componentWillMount() {
    this.setImagePage({ pageNumber: 1 });
  }

  async fetchImagePage({ endpoint, requestOptions }) {
    // Check function call is correctly formatted
    if ( !endpoint ) return new Error('Invalid request');
    if ( typeof requestOptions !== 'object' ) return new Error('Invalid request object');

    // Stringify request object
    const query = queryString.stringify( requestOptions );

    // Fetch API data and catch any errors
    const response = await fetch( endpoint + '?' + query ).catch( err => err );
    if (response instanceof Error ) return Promise.reject( response );

    // Return data parsed as json
    return await response.json();
  }

  async setImagePage({ pageNumber, pageSize = 20 }) {
    // Prepare request options - augment with defaults
    const requestOptions = {
      rpp: pageSize,
      page: pageNumber,
      ...this.defaultRequestOptions,
    };

    // Pass request data to fetching function, catch any errors
    const imagePage = await this.fetchImagePage({
      endpoint: this.endpoint,
      requestOptions
    }).catch( err => err );

    // If not error, set state with fetched page data
    if ( imagePage instanceof Error ) return imagePage;

    // Format photos array as needed for grid gallery and set state
    imagePage.photos = imagePage.photos.map( photo => this.formatImageData( photo ) );

    this.setState({ ...imagePage });
  }

  formatImageData({ id, images, height, width, name, description, user }) {
    // Image size 30 has max size of 256
    const {
      thumbnailWidth,
      thumbnailHeight
    } = this.getImageThumnailDimensions({ width, height, max: 256 });

    return {
      id,
      src: images[1].https_url,
      thumbnail: images[0].https_url,
      thumbnailWidth,
      thumbnailHeight,
      caption: this.getImageCaption({ name, description, fullname: user.fullname }),
    };
  }

  getImageThumnailDimensions({ height, width, max }) {
    const orientation = width > height ? 'landscape' : 'portrait';
    const modifier = orientation === 'landscape'
      ? width / max
      : height / max;

    return {
      thumbnailWidth: orientation === 'landscape' ? max : Math.ceil( width / modifier ),
      thumbnailHeight: orientation !== 'landscape' ? max : Math.ceil( height / modifier ),
    }
  }

  getImageCaption({ name, fullname, description }) {
    const captionPhotoName = name ? name + ' by ' : '';
    const captionName = fullname ? convertCase( fullname ) + ' - ' : '';
    const captionDescription = description ? strip( description ) : '';

    return truncateString( `${ captionPhotoName } ${ captionName } ${ captionDescription }`, 360 );
  }

  render() {
    return (
      // Pass state as Provider value, render children
      <ImagesContext.Provider value={ this.state }>
        { this.props.children }
      </ImagesContext.Provider>
    )
  }
}

// Helper to truncate descriptions strings
function truncateString( string, len ) {
  return ( string.length > len ) ? string.substr( 0, len-1 ) + '...' : string;
};

// Helper to strip out html content
function strip( html ) {
  const doc = new DOMParser().parseFromString( html, 'text/html' );
  return doc.body.textContent || "";
}

// Helper to uppercase names
function convertCase( str ) {
  var lower = String( str ).toLowerCase();
  return lower.replace( /(^| )(\w)/g, x => x.toUpperCase() );
}

export { ImagesProvider, ImagesContext };