import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IVChecker from './components/IVChecker/IVChecker';
import './css/App.css';
import './css/content.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <article>
          <IVChecker />
        </article>
        <Footer />
      </div>
    );
  }
}

export default App;
