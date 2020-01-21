import React from 'react';
import { ListInput } from '../Input';

import pokedex from '../../pokemon/data/pokedex.js';

const pokemonList = pokedex.map(({ name }, index) => ({
  name,
  key: index,
}));

const PokemonInput = ({ pokemon, onChange }) => (
  <ListInput
    placeholder="포켓몬 이름"
    defaultValue={pokemon}
    list={pokemonList}
    onChange={onChange}
  />
);

export default PokemonInput;
