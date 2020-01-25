import React from 'react';
import Grid from './Grid';
import classNames from 'classnames';
import styles from '../scss/components/Button.module.scss';

const Button = ({
  title,
  className,
  ...rest
}) => {
  rest.className = classNames(styles.button, className);
  return (
    <Grid {...rest}>
      {title}
    </Grid>
  );
};

export default Button;
