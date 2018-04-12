import React, { Component } from 'react';

import MainContent from './containers/MainContent/MainContent';
import TopNav from './containers/TopNavigation/TopNavigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TopNav />
          <MainContent />

      </div>
    );
  }
}

export default App;
