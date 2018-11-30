import React from 'react';
import styled from 'styled-components'

import { ImagesProvider } from './providers/ImagesProvider';
import { PhotoShowcase } from './components/PhotoShowcase';

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderStyles = styled.header`
  display: flex;
  flex: 1;

  padding: 2rem;
  box-shadow: 0px 0px 1.6rem 0px rgba(0,0,0,0.4);

  background-color: rgba(255, 255, 255, 0.7);

  .logo {
    height: 4rem;
    margin: 0 auto;
  }
`;

const App = () => (
  <>
    <ImagesProvider>
      <AppStyles>

        <HeaderStyles>
          <img className="logo" src="logo.svg" alt="500px Logo" />
        </HeaderStyles>

        <PhotoShowcase />

      </AppStyles>
    </ImagesProvider>
  </>
);

export default App;
