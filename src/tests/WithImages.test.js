import React from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { PhotoShowcaseRaw } from '../components/PhotoShowcase';
import MockImagesContext from './data/images-context';

describe( '<WithImages />', () => {

  beforeEach( () => {
    // reset modules
    jest.resetModules();
  });

  // Takes the context data we want to test, or uses defaults
  const getWithImagesWithContext = ( ImagesContext = MockImagesContext ) => {

    // Will then mock the ImagesContext module being used in our WithImages component
    jest.doMock('../providers/ImagesProvider', () => ({
      ImagesContext: { Consumer: (props) => props.children( ImagesContext ) }
    }));

    // you need to re-require after calling jest.doMock.
    // return the updated WithImages module that now includes the mocked context
    return require('../providers/WithImages').default;
  };

  it( 'Should parse context into props', () => {
    const WithImages = getWithImagesWithContext();
    const wrappedComponent = WithImages( PhotoShowcaseRaw )();
    const component = shallow( wrappedComponent );

    expect( component.props().images ).toHaveLength( 3 );
    expect( component.props().totalPages ).toBe( 1000 );
    expect( component.props().currentPage ).toBe( 1 );
    expect( typeof component.props().setImagePage === 'function' ).toBeTruthy();
  });
});