import React from 'react';
import Gallery from 'react-grid-gallery';

import WithImages from '../providers/WithImages';

const PhotoShowcase = props => (
  <>
    { props.images &&
      <Gallery
        enableImageSelection={ false }
        images={ props.images }
      />
    }
  </>
);

export default WithImages( PhotoShowcase );
