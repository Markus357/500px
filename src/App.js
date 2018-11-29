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
  border-bottom: 1px solid #eee;

  .logo {
    height: 4rem;
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
        <div className="App">
          <header className="App-header">
            <img className="App-logo" src="logo.svg" />
          </header>

      </AppStyles>
    </ImagesProvider>
  </>
);

export default App;
