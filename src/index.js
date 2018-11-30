import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'

import App from './App';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-size: 62.5%; /* base 10px */
    font-family: 'Helvetica Neue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
