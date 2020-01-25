import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { AsyncDefaultComponent } from './AsyncComponent';
import Grid from './Grid';
import Nav from '../containers/Nav';
import LoadingAnimation from './LoadingAnimation';

import styles from '../scss/components/Content.module.scss';

const AsyncIVChecker = () => (
  <AsyncDefaultComponent
    id="IVChecker"
    loader={import('../containers/IVChecker/IVChecker')}
  />
);

const AsyncSpeedChecker = () => (
  <AsyncDefaultComponent
    id="SpeedChecker"
    loader={import('../containers/SpeedChecker/SpeedChecker')}
  />
);

const AsyncCommunity = () => (
  <AsyncDefaultComponent
    id="IVChecker"
    loader={import('./Community')}
  />
);

const Content = ({ isMobile }) => (
  <Grid column={isMobile? "1" : "275px:1"}>
    <Nav />
    <article className={styles.content}>
      <Switch>
        <Route path="/iv-checker" component={AsyncIVChecker} />
        <Route path="/speed-checker" component={AsyncSpeedChecker} />
        <Route path="/test-loading-animation" component={LoadingAnimation} />
        <Route path="/" component={AsyncCommunity} exact />
        <Route path="*" component={() => <div>404</div>} />
      </Switch>
    </article>
  </Grid>
);

export default Content;
