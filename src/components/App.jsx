import React, { Component } from 'react';
import {
  HashRouter as Router,
} from "react-router-dom";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    const mediaQuery = window.matchMedia('(max-width: 1020px)');
    window.isMobileMediaQuery = mediaQuery;
    this.mediaQuery = mediaQuery;
    this.state = {
      isMobile: mediaQuery.matches,
      navOpened: false,
    };
  }

  componentDidMount() {
    const { mediaQuery } = this;
    mediaQuery.addListener(({ matches }) => {
      this.setState({
        isMobile: matches,
      });
    });
  }

  render() {
    const { isMobile, navOpened } = this.state;
    const navOpenHandler = () => {
      this.setState({
        navOpened: !navOpened,
      });
    };
    return (
      <Router>
        <Header isMobile={isMobile} onNavButtonClick={navOpenHandler} />
        <Content isMobile={isMobile} isNavOpen={navOpened} onNavButtonClick={navOpenHandler} />
        <Footer />
      </Router>
    );
  }
}

export default App;
