import React from "react";
import classNames from "classnames";
import { VerticalCenterText } from "../Text";

import ThreeGrid from "./ThreeGrid";

import styles from "../../scss/components/IVChecker/IVResult.module.scss";

import { findPokemonByName } from "../../pokemon/data/pokedex";
import { findNatureByName } from "../../pokemon/data/nature";
import calcRealStat from "../../pokemon/calcRealStat";

function getBaseStatFromPokemon(type, pokemon) {
  const baseStatKey = Array.from("HABCDS").indexOf(type);
  const baseStat = pokemon.stat[baseStatKey];
  return baseStat;
}

function calcIV(type, pokemon, dynamax, stat, nature, level) {
  const defaultMessage = "???";
  if (!pokemon || !nature || !level) return defaultMessage;
  const baseStat = getBaseStatFromPokemon(type, pokemon);
  stat = (stat || {})[type] || {};
  const { ev, realStat } = stat;
  const range = [...Array(32).keys()];
  const validIVs = !realStat
    ? []
    : range.filter(iv => {
        return (
          realStat ===
          calcRealStat({
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
      });

  if (!validIVs.length) return defaultMessage;
  const minIV = Math.min(...validIVs);
  const maxIV = Math.max(...validIVs);
  return minIV === maxIV ? maxIV : `${minIV}~${maxIV}`;
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

const IVResult = ({ pokemon, dynamax, stat, nature, level, isMobile }) => {
  pokemon = findPokemonByName(pokemon);
  nature = findNatureByName(nature);
  const params = [pokemon, dynamax, stat, nature, level];
  const { ResultGrid, Result } = IVResult;
  const props = {
    isMobile,
    params,
  };
  return (
    <div className={styles.IVResult}>
      <ResultGrid {...props}>
        <div />
        <div>현재 개체값</div>
        <div>V일때 실수치</div>
      </ResultGrid>
      <Result name="HP" type="H" {...props} />
      <Result name="공격" type="A" {...props} />
      <Result name="방어" type="B" {...props} />
      <Result name="특공" type="C" {...props} />
      <Result name="특방" type="D" {...props} />
      <Result name="스피드" type="S" {...props} />
    </div>
  );
};

IVResult.ResultGrid = ({ children, isMobile }) => (
  <ThreeGrid
    isDesktop={!isMobile}
    className={classNames(styles.resultGrid, {
      [styles.desktopGrid]: !isMobile,
    })}
  >
    {children}
  </ThreeGrid>
);

IVResult.Result = ({ name, type, params, isMobile }) => {
  const { ResultGrid } = IVResult;
  params = [type, ...params];
  return (
    <ResultGrid isMobile={isMobile}>
      <VerticalCenterText>{name}</VerticalCenterText>
      <div>{calcIV(...params)}</div>
      <div>{getStatIVFull(...params)}</div>
    </ResultGrid>
  );
};

export default IVResult;
