import React from 'react';
import { ImagesContext } from '../providers/ImagesProvider';

const WithImages = ( WrappedComponent ) => props => (
  <ImagesContext.Consumer>
    { imagesContext => (
      <WrappedComponent {...props}
        images={ imagesContext.photos }
        currentPage={ imagesContext.current_page }
        totalPages={ imagesContext.total_pages }
        setImagePage={ imagesContext.setImagePage }
      />
    )}
  </ImagesContext.Consumer>
);

export default WithImages;