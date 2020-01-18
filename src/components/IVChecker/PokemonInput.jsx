import React from 'react';
import { ListInput } from '../Input';

import pokedex from '../../pokemon/data/pokedex.js';

const PokemonInput = ({ pokemon, onChange }) => (
  <ListInput
    placeholder="포켓몬 이름"
    defaultValue={pokemon}
    list={pokedex.map(pkm => pkm.name)}
    onChange={onChange}
  />
);

export default PokemonInput;
