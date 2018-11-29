import React from 'react';
import { ImagesContext } from '../providers/ImagesProvider';

const WithImages = ( WrappedComponent ) => props => (
  <ImagesContext.Consumer>
    { imagesContext => <WrappedComponent {...props} images={ imagesContext.photos } /> }
  </ImagesContext.Consumer>
);

export default WithImages;