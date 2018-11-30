import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import { ImagesProvider } from '../providers/ImagesProvider';

describe( '<ImagesProvider />', () => {

  describe( 'getImageThumnailDimensions', () => {

    const testDimensions = [
      { width: 800, height: 600, max: 400 },
      { width: 600, height: 800, max: 400 },
      { width: 800, height: 800, max: 400 },
    ]

    it( 'Should properly scale the image dimensions', () => {
      const providerInstance = shallow( <ImagesProvider /> ).instance();

      const case1 = providerInstance.getImageThumnailDimensions( testDimensions[0] );
      expect( case1 ).toMatchObject({thumbnailWidth: 400, thumbnailHeight: 300 });

      const case2 = providerInstance.getImageThumnailDimensions( testDimensions[1] );
      expect( case2 ).toMatchObject({thumbnailWidth: 300, thumbnailHeight: 400 });

      const case3 = providerInstance.getImageThumnailDimensions( testDimensions[2] );
      expect( case3 ).toMatchObject({thumbnailWidth: 400, thumbnailHeight: 400 });
    });

  })

});