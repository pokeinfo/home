import React, { useState, useEffect } from 'react';
import { BoxContainer } from '../Container';
import { NumberInput, Select } from '../Input';
import Grid from '../Grid';
import SelectPokemon from '../Pokemon/SelectPokemon';
import LevelInput from '../Pokemon/LevelInput';

import { findPokemonByName } from '../../pokemon/data/pokedex';

const speedItems = [
  {
    name: "아이템 영향없음",
    value: 1,
  }, {
    name: "구애의 스카프 (X1.5)",
    value: 1.5,
  }, {
    name: "스피드 파우더 (X2, 메타몽 전용)",
    value: 2,
  },
];

const speedAbilities = [
  {
    name: "특성 영향없음",
    value: 0,
  }, {
    name: "속보 (X1.5)",
    value: 1.5,
  }, {
    name: "곡예 / 쓱쓱 / 엽록소 (X2)",
    value: 2,
  }, {
    name: "슬로우 스타트 (X0.5)",
    value: 0.5,
  },
];

const rankList = [
  ...Array(13).keys()
].map(n => n - 6) // range(-6, 6)
.map(n => ({
  name: `${n} 랭크`,
  value: n,
  selected: !n,
}));

const natureList = [
  {
    name: '스피드 무보정 성격',
    value: 1
  }, {
    name: '스피드 상승 성격',
    value: 1.1
  }, {
    name: '스피드 하락 성격',
    value: 0.9
  },
];

[
  speedItems,
  speedAbilities,
  rankList,
  natureList,
].forEach((list, index) => {
  list.forEach(
    (o, i) => o.key = `Speed_Item_${index}_${i}`
  );
});

const PokemonInput = ({
  title,
  onChange,
}) => {
  const [ nature, setNature ] = useState(0);
  const [ level, setLevel ] = useState(50);
  const [ ev, setEV ] = useState();
  const [ iv, setIV ] = useState();
  const [ rank, setRank ] = useState(0);
  const [ item, setItem ] = useState(1);
  const [ ability, setAbility ] = useState(1);

  const setPokemon = (pokemon) => {
    pokemon = findPokemonByName(pokemon);
    if (pokemon) onChange(prevState => ({
      ...prevState,
      baseStat: pokemon.stat[5],
    }));
  };

  useEffect(() => {
    onChange(prevState => ({
      ...prevState,
      nature,
      level,
      ev,
      iv,
      rank,
      effect: item * ability,
    }));
  }, [
    nature, level, ev, iv, rank, item, ability, onChange
  ]);

  return (
    <BoxContainer>
      <p>{title}</p>
      <SelectPokemon onChange={setPokemon} />
      <Grid column="3:2" gap="1rem">
        <Select list={natureList} onChange={v => setNature(+v)} />
        <LevelInput level={level} onChange={setLevel} />
      </Grid>
      <Grid column="1:1:1" gap="1rem">
        <NumberInput
          placeholder="노력치"
          min={0}
          max={252}
          onChange={setEV}
        />
        <NumberInput
          placeholder="개체값"
          min={0}
          max={31}
          onChange={setIV}
        />
        <Select
          label={"랭크"}
          list={rankList}
          onChange={v => setRank(+v)}
        />
      </Grid>
      <Grid column="1:1" gap="1rem">
        <Select list={speedItems} onChange={v => setItem(+v)} />
        <Select list={speedAbilities} onChange={v => setAbility(+v)} />
      </Grid>
    </BoxContainer>
  );
};

export default PokemonInput;
