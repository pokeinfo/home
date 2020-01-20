import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import { AsyncDefaultComponent } from './AsyncComponent';
import Home from './Home/Home';
import Footer from './Footer';

import styles from '../css/components/App.module.scss';

const AsyncIVChecker = () => (
  <AsyncDefaultComponent
    loader={import('./IVChecker/IVChecker')}
  />
);

const App = () => (
  <Router>
    <Header />
    <article className={styles.content}>
      <Switch>
        <Route path="/iv-checker" component={AsyncIVChecker} />
        <Route path="/" component={Home} />
      </Switch>
    </article>
    <Footer />
  </Router>
);

export default App;
