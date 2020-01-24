import React from 'react';
import { Link } from 'react-router-dom';
import { NavOpenButton } from './Nav';
import Grid from './Grid';
import styles from '../scss/components/Header.module.scss';

const Header = ({ isMobile, onNavButtonClick }) => (
  <div>
    <header className={styles.header}>
      <Grid column="1:4:1">
        <div />
        <h1>
          <Link to="/">Pokè Info</Link>
        </h1>
        <NavOpenButton isMobile={isMobile} onClick={onNavButtonClick} />
      </Grid>
    </header>
    <div className={styles.headerSafeZone} />
  </div>
);

export default Header;
