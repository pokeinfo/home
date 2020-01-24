import React from 'react';
import classNames from 'classnames';
import styles from '../scss/components/Title.module.scss';

const Title = ({
  className,
  children,
  ...rest
}) => {
  rest.className = classNames(styles.title, className);
  return <h2 {...rest}>{children}</h2>;
};

export default Title;
