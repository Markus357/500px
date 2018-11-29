import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

import { ImagesProvider } from './providers/ImagesProvider';
import PhotoShowcase from './components/PhotoShowcase';

const GlobalStyles = createGlobalStyle`
  html, body {
    font-size: 62.5%; /* base 10px */
    font-family: 'Helvetica Neue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderStyles = styled.header`
  display: flex;
  flex: 1;

  padding: 2rem;
  box-shadow: 0px 0px 1.6rem 0px rgba(0,0,0,0.4);

  margin-bottom: 1rem;

  .logo {
    height: 4rem;
    margin: 0 auto;
  }
`;

const App = () => (
  <>
    <GlobalStyles />

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
