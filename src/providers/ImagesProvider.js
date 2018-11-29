import React from 'react';
import queryString from 'query-string';

const ImagesContext = React.createContext();

class ImagesProvider extends React.Component {

  constructor( props ) {
    super( props );

    // Import environment details
    this.endpoint = process.env.REACT_APP_API_URL;
    this.apiKey = process.env.REACT_APP_API_KEY;

    // Pre-configure request parameters
    this.requestOptions = {
      consumer_key: this.apiKey,
      feature: 'popular',
      image_size: '2,3,1600',
      rpp: 20,
    };

    // Initialize State
    this.state = {};
  }

  async componentWillMount() {
    // Destructure endpoint and requestOptions from instance
    const { endpoint, requestOptions } = this;

    // Pass request data to fetching function, catch any errors
    const imagePage = await this.fetchImagePage({ endpoint, requestOptions }).catch( err => err );

    // If not error, set state with fetched page data
    !( imagePage instanceof Error ) && this.setState({ ...imagePage });
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

  render() {
    return (
      // Pass state as Provider value, render children
      <ImagesContext.Provider value={ this.state }>
        { this.props.children }
      </ImagesContext.Provider>
    )
  }
}

export { ImagesProvider, ImagesContext };