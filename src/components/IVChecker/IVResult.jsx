import React from 'react';
import { VerticalCenterText } from '../Text';

import ThreeGrid from './ThreeGrid';

import styles from '../../css/components/IVChecker/IVResult.module.scss';

import pokedex from '../../pokemon/data/pokedex';
import pokemonNatures from '../../pokemon/data/nature';
import calcRealStat from '../../pokemon/calcRealStat';

function findByName(array, name) {
  return array.find(object => object.name === name);
}

function findPokemonByName(name) {
  return findByName(pokedex, name);
}

function findNatureByName(name) {
  return findByName(pokemonNatures, name);
}

function getBaseStatFromPokemon(type, pokemon) {
  const baseStatKey = Array.from('HABCDS').indexOf(type);
  const baseStat = pokemon.stat[baseStatKey];
  return baseStat;
}

function calcIV(type, pokemon, dynamax, stat, nature, level) {
  const defaultMessage = "???";
  if (!pokemon || !nature || !level) return defaultMessage;
  const baseStat = getBaseStatFromPokemon(type, pokemon);
  stat = (stat || {})[type] || {};
  const { ev, realStat } = stat;
  const range = [ ...Array(32).keys() ];
  const validIVs = !realStat? [] : range.filter(
    iv => realStat === calcRealStat({
      pokemonIndex: pokemon.index,
      type,
      iv,
      ev,
      dynamax,
      level,
      baseStat,
      nature,
    })
  );

  if (!validIVs.length) return defaultMessage;
  const minIV = Math.min(...validIVs);
  const maxIV = Math.max(...validIVs);
  return (minIV === maxIV)? maxIV : `${minIV}~${maxIV}`;
}

function getStatIVFull(type, pokemon, dynamax, stat, nature, level) {
  if (!pokemon || !nature || !level) return "???";
  const baseStat = getBaseStatFromPokemon(type, pokemon);
  stat = (stat || {})[type] || {};
  let { ev } = stat;
  ev = ev || 0;
  return calcRealStat({
    pokemonIndex: pokemon.index,
    type,
    iv: 31,
    ev,
    dynamax,
    level,
    baseStat,
    nature,
  });
}

const IVResult = ({
  pokemon,
  dynamax,
  stat,
  nature,
  level,
}) => {
  pokemon = findPokemonByName(pokemon);
  nature = findNatureByName(nature);
  const params = [ pokemon, dynamax, stat, nature, level ];
  const {
    ResultGrid,
    Result,
  } = IVResult;
  return (
    <div className={styles.IVResult}>
      <ResultGrid>
        <div />
        <div>현재 개체값</div>
        <div>V일때 실수치</div>
      </ResultGrid>
      <Result name="HP" type="H" params={params} />
      <Result name="공격" type="A" params={params} />
      <Result name="방어" type="B" params={params} />
      <Result name="특공" type="C" params={params} />
      <Result name="특방" type="D" params={params} />
      <Result name="스피드" type="S" params={params} />
    </div>
  );
};

IVResult.ResultGrid = ({ children }) => (
  <ThreeGrid className={styles.resultGrid}>
    {children}
  </ThreeGrid>
);

IVResult.Result = ({ name, type, params }) => {
  const { ResultGrid } = IVResult;
  params = [
    type,
    ...params,
  ];
  return (
    <ResultGrid>
      <VerticalCenterText>{name}</VerticalCenterText>
      <div>{calcIV(...params)}</div>
      <div>{getStatIVFull(...params)}</div>
    </ResultGrid>
  );
}

export default IVResult;
