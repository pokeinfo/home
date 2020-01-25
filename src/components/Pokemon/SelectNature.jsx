import React from 'react';
import { ListInput } from '../Input';

import pokemonNatures from '../../pokemon/data/nature.js';

const natureList = pokemonNatures.map(
  ({ name }, index) => ({
    name,
    key: index,
  })
);

const SelectNature = ({ ...rest }) => (
  <ListInput
    placeholder="성격"
    list={natureList}
    {...rest}
  />
);

export default SelectNature;
