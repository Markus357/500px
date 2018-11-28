import React from 'react';

const ImagesContext = React.createContext();

class ImagesProvider extends React.Component {
  
  constructor( props ) {
    super( props );
    this.getImages = this.getImages.bind( this );

    this.state = {
      images: [],
      getImages: this.getImages,
    };
  }

  getImages() {
    return this.state.images;
  }

  render() {
    return (
      <ImagesContext.Provider value={ this.state }>
        { this.props.children }
      </ImagesContext.Provider>
    )
  }
}

export { ImagesProvider, ImagesContext };