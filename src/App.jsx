import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IVChecker from './components/IVChecker/IVChecker';

import styles from './css/components/App.module.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <article className={styles.content}>
          <IVChecker />
        </article>
        <Footer />
      </div>
    );
  }
}

export default App;
