import React from 'react';
import { ListInput } from '../Input';

import pokemonNatures from '../../pokemon/data/nature.js';

const natureList = pokemonNatures.map(nature => nature.name);
const NatureInput = ({ nature, onChange }) => (
  <ListInput
    placeholder="성격"
    defaultValue={nature}
    list={natureList}
    onChange={onChange}
  />
);

export default NatureInput;
