import React from 'react';
import { NumberInput } from '../Input';

const LevelInput = ({ level, onChange }) => (
  <NumberInput
    placeholder="레벨"
    defaultValue={level}
    min={1}
    max={100}
    onChange={onChange}
  />
);

export default LevelInput;
