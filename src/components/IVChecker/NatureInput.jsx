import React from 'react';
import { ListInput } from '../Input';

import pokemonNatures from '../../pokemon/data/nature.js';

const NatureInput = ({ nature, onChange }) => (
  <ListInput
    placeholder="성격"
    defaultValue={nature}
    list={pokemonNatures.map(nature => nature.name)}
    onChange={onChange}
  />
);

export default NatureInput;
