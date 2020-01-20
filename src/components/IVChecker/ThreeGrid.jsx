import React from 'react';
import Grid from '../Grid';

const ThreeGrid = ({
  ...rest
}) => {
  return (
    <Grid column="3.5rem:1:1" gap="1rem" {...rest} />
  );
};

export default ThreeGrid;
