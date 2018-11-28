import React, { Component } from 'react';

import { ImagesProvider } from './providers/ImagesProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <ImagesProvider>
        <div className="App">
          <header className="App-header">
            <img className="App-logo" src="logo.svg" />
          </header>
            
        </div>
      </ImagesProvider>
    );
  }
}

export default App;
