import React from 'react';
import Container from './Container';
import { CenteredText } from './Text';
import classNames from 'classnames';
import styles from '../scss/components/LoadingAnimation.module.scss'

import { ReactComponent as EmptyPokeballImage } from '../svg/pokeball.svg';

const PokeballImage = ({ spinStop }) => (
  <div className={classNames(styles.pokeball, { [styles.spinStop]: spinStop })}>
    <div />
    <div><div></div></div>
    <EmptyPokeballImage />
  </div>
);

const LoadingAnimation = ({ errorMessage }) => (
  <Container className={styles.container}>
    <PokeballImage spinStop={errorMessage} />
    <br />
    <CenteredText>{errorMessage || "불러오는 중..."}</CenteredText>
  </Container>
);

export default LoadingAnimation;
