import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { AsyncDefaultComponent } from './AsyncComponent';
import Grid from './Grid';
import Nav from './Nav';
import LoadingAnimation from './LoadingAnimation';

import styles from '../scss/components/Content.module.scss';

const AsyncIVChecker = () => (
  <AsyncDefaultComponent
    id="IVChecker"
    loader={import('./IVChecker/IVChecker')}
  />
);

const AsyncSpeedChecker = () => (
  <AsyncDefaultComponent
    id="SpeedChecker"
    loader={import('./SpeedChecker/SpeedChecker')}
  />
);

const AsyncCommunity = () => (
  <AsyncDefaultComponent
    id="IVChecker"
    loader={import('./Community')}
  />
);

const Content = ({ isMobile, isNavOpen, onNavButtonClick }) => (
  <Grid column={isMobile? "1" : "275px:1"}>
    <Nav
      isMobile={isMobile}
      isOpen={isNavOpen}
      onClickClose={onNavButtonClick}
    />
    <article className={styles.content}>
      <Switch>
        <Route path="/iv-checker" component={AsyncIVChecker} />
        <Route path="/speed-checker" component={AsyncSpeedChecker} />
        <Route path="/test-loading-animation" component={LoadingAnimation} />
        <Route path="/" component={AsyncCommunity} exact />
        <Route path="/" component={() => <div>404</div>} />
      </Switch>
    </article>
  </Grid>
);

export default Content;
