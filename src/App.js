import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Background from './hoc/background';
import MainContent from './containers/MainContent/MainContent';
import TopNav from './containers/TopNavigation/TopNavigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
     
        <div className="App">
            <Background color='#603EFE'/>
            <Background color='#81FFDD'/>
            <TopNav />
            <MainContent />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
