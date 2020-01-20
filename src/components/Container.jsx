import React from 'react';
import styles from '../css/components/Container.module.scss';

import classNames from 'classnames';

const Container = ({
  className,
  ...rest
}) => {
  rest.className = classNames(styles.container, className);
  return (
    <div {...rest} />
  );
}

export default Container;
