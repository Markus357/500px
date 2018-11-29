import React from 'react';
import Gallery from 'react-grid-gallery';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import WithImages from '../providers/WithImages';

const GalleryStyles = styled.div`
  .ReactGridGallery {
    text-align: center;

    .tile {
      display: inline-block;
      float: none !important;
      outline: 3px solid #fff;
      box-shadow: 0px 0px 0px -4px rgba(0,0,0,0);
      transition: all ease-in 125ms;

      &:hover {
        z-index: 2;
        box-shadow: 0px 0px 30px -4px rgba(0,0,0,0.9);
        transform: scale( 1.15 );
      }
    }
  }
`;

const PaginationStyles = styled.div`
  position: relative;
  width: 100%;

  text-align: center;
  font-size: 1.6rem;
  line-height: 1.6rem;

  .pagination {
    display: inline-block;
    margin: 1rem auto;

    li {
      display: inline-block;

      text-align: center;

      margin: 0 0.4rem;
      border-radius: 0.3rem;

      &:hover { transform: scale( 1.2 ); }

      &.active {
        background-color: #000;

        a { color: #fff; }
      }

      &.previous, &.next, &.break { width: auto; }

      &.disabled {
        opacity: 0.4;

        a { cursor: not-allowed; }
      }

      a {
        cursor: pointer;
        display: inline-block;
        padding: 0.6rem;
        color: #000;
      }
    }
  }
`;

const PhotoShowcase = props => (
  <GalleryStyles>
    { props.images &&
      <Gallery
        enableImageSelection={ false }
        maxRows={ 3 }
        images={ props.images }
      />
    }

    <PaginationStyles>
      <ReactPaginate
        previousLabel={ 'previous' }
        nextLabel={ 'next' }
        breakLabel={ '...' }
        breakClassName={ 'break-me' }
        pageCount={ props.totalPages }
        marginPagesDisplayed={ 2 }
        pageRangeDisplayed={ 5 }
        onPageChange={ data => props.setImagePage({ pageNumber: data.selected +1 }) }
        containerClassName={ 'pagination' }
        subContainerClassName={ 'pages pagination' }
        activeClassName={ 'active' }
      />
    </PaginationStyles>
  </GalleryStyles>
);

export default WithImages( PhotoShowcase );
