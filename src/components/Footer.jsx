import React from 'react';
import styles from '../scss/components/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      <a
        href="https://github.com/pokeinfo/home"
        target="_blank"
        rel="noopener noreferrer"
      >
        View source on Github
      </a>
    </p>
    <p className={styles.copyright}>
      Copyright 2019. Seung hyun Hwang, All rights reserved.
    </p>
  </footer>
);

export default Footer;
