import React from 'react';
import classNames from 'classnames';
import styles from '../css/components/Container.module.scss';

const Container = ({
  className,
  ...rest
}) => {
  rest.className = classNames(styles.container, className);
  return <div {...rest} />;
}

const BoxContainer = ({
  className,
  ...rest
}) => {
  rest.className = classNames(styles.box, className);
  return <Container {...rest} />;
};

export default Container;
export {
  BoxContainer,
};
