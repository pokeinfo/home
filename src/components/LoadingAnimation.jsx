import React from 'react';
import Container from './Container';
import { CenteredText } from './Text';
import styles from '../css/components/LoadingAnimation.module.scss'

import pokeballImage from '../img/pokeball.png';

const LoadingAnimation = () => (
  <Container>
    <img
      src={pokeballImage}
      alt="Loading spinning Pokèball"
      className={styles.loadingRing}
    />
    <br />
    <CenteredText>불러오는 중...</CenteredText>
  </Container>
);

export default LoadingAnimation;
