import React from 'react';
import Container from './Container';
import { CenteredText } from './Text';
import styles from '../css/components/LoadingAnimation.module.scss'

import { ReactComponent as EmptyPokeballImage } from '../svg/pokeball.svg';

const PokeballImage = () => (
  <div className={styles.pokeball}>
    <div />
    <div><div></div></div>
    <EmptyPokeballImage />
  </div>
);

const LoadingAnimation = () => (
  <Container>
    <PokeballImage />
    <br />
    <CenteredText>불러오는 중...</CenteredText>
  </Container>
);

export default LoadingAnimation;
