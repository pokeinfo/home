import React from 'react';
import { ListInput } from '../Input';

import pokedex from '../../pokemon/data/pokedex.js';

const pokemonList = pokedex.map(
  ({ name }, index) => ({
    name,
    key: index,
  })
);

const SelectPokemon = (props) => (
  <ListInput
    placeholder="포켓몬 이름"
    list={pokemonList}
    {...props}
  />
);

export default SelectPokemon;
