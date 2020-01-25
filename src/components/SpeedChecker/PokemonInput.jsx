import React from 'react';
import { BoxContainer } from '../Container';
import { NumberInput, Select } from '../Input';
import Button from '../Button';
import Grid from '../Grid';
import SelectPokemon from '../Pokemon/SelectPokemon';
import LevelInput from '../Pokemon/LevelInput';

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
  pokemon,
  onChange,
  onClickDelete,
}) => {
  const {
    base = '',
    nature = 1,
    level = 50,
    ev = '',
    iv = '',
    rank = 0,
    item = 1,
    ability = 1,
  } = pokemon || {};

  if (!pokemon) onChange({ // 기본값 설정
    level,
    rank,
    item,
    ability,
    nature,
  });

  const getOnChange = key => value => onChange({ [key]: value });
  const getNumberOnChange = key => value => onChange({ [key]: +value });

  return (
    <BoxContainer>
      <p>{title}</p>
      <SelectPokemon value={base} onChange={getOnChange('base')} />
      <Grid column="3:2" gap="1rem">
        <Select
          list={natureList}
          value={nature}
          onChange={getNumberOnChange('nature')}
        />
        <LevelInput value={level} onChange={getNumberOnChange('level')} />
      </Grid>
      <Grid column="1:1:1" gap="1rem">
        <NumberInput
          placeholder="노력치"
          min={0}
          max={252}
          value={ev}
          onChange={getNumberOnChange('ev')}
        />
        <NumberInput
          placeholder="개체값"
          min={0}
          max={31}
          value={iv}
          onChange={getNumberOnChange('iv')}
        />
        <Select
          label={"랭크"}
          list={rankList}
          value={rank}
          onChange={getNumberOnChange('rank')}
        />
      </Grid>
      <Grid column="1:1" gap="1rem">
        <Select
          list={speedItems}
          value={item}
          onChange={getNumberOnChange('item')}
        />
        <Select
          list={speedAbilities}
          value={ability}
          onChange={getNumberOnChange('ability')}
        />
      </Grid>
      <br/>
      <Grid column="1:1:1" gap=".5rem">
        <Button title="초기화" onClick={onClickDelete}/>
        <Button title="최속 보정" onClick={() => onChange({ nature: 1.1, iv: 31, ev: 252})}/>
        <Button title="준속 보정" onClick={() => onChange({ nature: 1, iv: 31, ev: 252})}/>
      </Grid>
    </BoxContainer>
  );
};

export default PokemonInput;
