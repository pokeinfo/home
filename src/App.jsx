import React, { Component } from 'react';
import IVChecker from './components/IVChecker/IVChecker';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokè Info</h1>
        <IVChecker />
      </div>
    );
  }
}

export default App;
