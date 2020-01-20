import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { AsyncDefaultComponent } from './AsyncComponent';
import Grid from './Grid';
import Nav from './Nav';
import Community from './Community';

import styles from '../css/components/Content.module.scss';

const AsyncIVChecker = () => (
  <AsyncDefaultComponent
    id="IVChecker"
    loader={import('./IVChecker/IVChecker')}
  />
);

const Content = ({ isMobile, isNavOpen, onNavButtonClick }) => {
  return (
    <Grid column={isMobile? "1" : "275px:1"}>
      <Nav isMobile={isMobile} isOpen={isNavOpen} onClickClose={onNavButtonClick} />
      <article className={styles.content}>
        <Switch>
          <Route path="/iv-checker" component={AsyncIVChecker} />
          <Route path="/" component={Community} />
        </Switch>
      </article>
    </Grid>
  );
};

export default Content;
