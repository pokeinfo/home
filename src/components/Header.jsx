import React from 'react';
import styles from '../css/components/Header.module.scss';

const Header = () => (
  <div>
    <header className={styles.header}>
      <h1>Pokè Info</h1>
    </header>
    <div className={styles.headerSafeZone} />
  </div>
);

export default Header;
