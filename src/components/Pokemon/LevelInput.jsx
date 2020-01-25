import React from 'react';
import { NumberInput } from '../Input';

const LevelInput = (props) => (
  <NumberInput
    placeholder="레벨"
    min={1}
    max={100}
    label="LV"
    {...props}
  />
);

export default LevelInput;
