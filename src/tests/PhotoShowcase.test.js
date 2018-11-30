import React from 'react';
import renderer from 'react-test-renderer';

import images from './data/images-processed';
import { PhotoShowcaseRaw } from '../components/PhotoShowcase';

describe( '<PhotoShowcaseRaw />', () => {
  let defaultProps;
  let componentWithDefaultProps;
  let treeWithDefaultProps;

  beforeEach( () => {
    // reset defaults
    defaultProps = { images, totalPages: 10, currentPage: 1 };
    componentWithDefaultProps = renderer.create( <PhotoShowcaseRaw { ...defaultProps } /> );
    treeWithDefaultProps = componentWithDefaultProps.toJSON();
  });

  it( 'Should render the gallery when images are present', () => expect( treeWithDefaultProps ).toMatchSnapshot() );

  it( 'Should render pagination when there is more than 1 page of images', () => expect( treeWithDefaultProps ).toMatchSnapshot() );

  it( 'Should not render the gallery when images are empty', () => {
    // Modify default props for this scenario (empty images)
    const props = { ...defaultProps, images: [] };
    const component = renderer.create( <PhotoShowcaseRaw { ...props } /> );
    const tree = component.toJSON();

    expect( tree ).toMatchSnapshot();
  });
});