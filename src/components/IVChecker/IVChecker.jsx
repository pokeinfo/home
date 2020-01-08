import React, { useState } from 'react';
import { NumberInput, ListInput } from '../Input';
import Grid from '../Grid';
import Container from '../Container';

import pokedex from '../../pokemon/pokedex.json';
import pokemonNatures from '../../pokemon/nature.json';

import '../../css/IVChecker/IVChecker.css';

function findByName(array, name) {
  return array.find(object => object.name === name);
}

const DynamaxButton = ({
  dynamax,
  onChange,
}) => {
  function clickEvent() {
    dynamax = !dynamax;
    onChange(dynamax);
  }
  return (
    <div
      id="dynamax-button"
      className={dynamax? "dynamax" : ""}
      onClick={clickEvent}
    >
      다이맥스 : {dynamax? "" : "비"}활성화
    </div>
  );
};

const StatInput = ({
  stat,
  statKey,
  onChange,
}) => {
  const [ pokemonStat, setPokemonStat ] = useState({
    realState: 0,
    ev: 0,
  });

  const eventHandler = (key) => (event) => {
    const value = +event.target.value;
    let newState;
    setPokemonStat(prevState => {
      newState = { ...prevState };
      newState[key] = value;
      onChange(newState);
      return newState;
    });
  };

  return (
    <Grid column="1:2:2">
      <div>{stat}</div>
      <NumberInput
        placeholder={stat + " 실수치"}
        min={1}
        onChange={eventHandler('realState')}
      />
      <NumberInput
        placeholder={stat + " 노력치"}
        min={0}
        max={252}
        defaultValue={pokemonStat.ev}
        onChange={eventHandler('ev')}
      />
    </Grid>
  );
}

function calcIV(type, pokemon, dynamax, stat, nature, level) {
  const defaultMessage = "???";
  if (!pokemon || !nature) return defaultMessage;
  const range = Array(32).fill().map((e, i) => i);
  const baseStatKey = Array.from('HABCDS').indexOf(type);
  const baseStat = pokemon.state[baseStatKey];
  stat = (stat || {})[type] || {};
  let validIVs = [];
  switch (type) {
    case 'H':
      validIVs = range.filter(iv => {
        return stat.realState === (dynamax? 2 : 1) * (
            Math.floor(
            (level / 100) * (
              baseStat * 2
              + iv
              + Math.floor(stat.ev / 4)
            )
          ) + level + 10
        );
      });
      break;

    case 'A':
    case 'B':
    case 'C':
    case 'D':
    case 'S':
      validIVs = range.filter(iv => {
        return stat.realState === Math.floor(
          Math.floor(
            (level / 100) * (
              baseStat * 2
              + iv
              + Math.floor(stat.ev / 4)
            )
            + 5
          ) * (
            nature.up === type
              ? 1.1
              : 1
          ) * (
            nature.down === type
              ? 0.9
              : 1
          )
        );
      });
      break;

    default:
      throw TypeError("Invalid type");
  }

  if (!validIVs.length) return defaultMessage;
  const minIV = Math.min(...validIVs);
  const maxIV = Math.max(...validIVs);
  return (minIV === maxIV)? maxIV : `${minIV}~${maxIV}`;
}

const IVResult = ({
  pokemon,
  dynamax,
  stat,
  nature,
  level,
}) => {
  pokemon = findByName(pokedex, pokemon);
  nature = findByName(pokemonNatures, nature);
  return (
    <Container>
      <Grid column="1:3">
        <div>HP</div>
        <div>{calcIV('H', pokemon, dynamax, stat, nature, level)}</div>
      </Grid>
      <Grid column="1:3">
        <div>공격</div>
        <div>{calcIV('A', pokemon, dynamax, stat, nature, level)}</div>
      </Grid>
      <Grid column="1:3">
        <div>방어</div>
        <div>{calcIV('B', pokemon, dynamax, stat, nature, level)}</div>
      </Grid>
      <Grid column="1:3">
        <div>특공</div>
        <div>{calcIV('C', pokemon, dynamax, stat, nature, level)}</div>
      </Grid>
      <Grid column="1:3">
        <div>특방</div>
        <div>{calcIV('D', pokemon, dynamax, stat, nature, level)}</div>
      </Grid>
      <Grid column="1:3">
        <div>스피드</div>
        <div>{calcIV('S', pokemon, dynamax, stat, nature, level)}</div>
      </Grid>
    </Container>
  );
};

const IVChecker = () => {
  const [ dynamax, setDynamax ] = useState(false);
  const [ level, setLevel ] = useState();
  const [ pokemon, setPokemon ] = useState();
  const [ nature, setNature ] = useState();
  const [ pokemonStat, setPokemonStat ] = useState({});

  function getInputValue(event) {
    return event.target.value;
  }

  return (
    <Container id="iv-checker">
      <h2>개체값 계산기</h2>
      <div>
        <ListInput
          placeholder="포켓몬 이름"
          list={pokedex.map(pkm => pkm.name)}
          onChange={event => setPokemon(getInputValue(event))}
        />
        <Grid column="3:2">
          <ListInput
            placeholder="성격"
            list={pokemonNatures.map(nature => nature.name)}
            onChange={event => setNature(getInputValue(event))}
          />
          <NumberInput
            placeholder="레벨"
            min={1}
            max={100}
            onChange={event => setLevel(+getInputValue(event))}
          />
        </Grid>
        <DynamaxButton
          dynamax={dynamax}
          onChange={dynamax => setDynamax(dynamax)}
        />
        <Container>
          <Grid column="1:2:2">
            <div />
            <div>실수치</div>
            <div>노력치</div>
          </Grid>
          <StatInput
            stat="HP"
            onChange={set => setPokemonStat(pokemonStat => ({
              ...pokemonStat,
              H: set,
            }))}
          />
          <StatInput
            stat="공격"
            onChange={set => setPokemonStat(pokemonStat => ({
              ...pokemonStat,
              A: set,
            }))}
          />
          <StatInput
            stat="방어"
            onChange={set => setPokemonStat(pokemonStat => ({
              ...pokemonStat,
              B: set,
            }))}
          />
          <StatInput
            stat="특공"
            onChange={set => setPokemonStat(pokemonStat => ({
              ...pokemonStat,
              C: set,
            }))}
          />
          <StatInput
            stat="특방"
            onChange={set => setPokemonStat(pokemonStat => ({
              ...pokemonStat,
              D: set,
            }))}
          />
          <StatInput
            stat="스피드"
            onChange={set => setPokemonStat(pokemonStat => ({
              ...pokemonStat,
              S: set,
            }))}
          />
        </Container>
      </div>
      <IVResult
        pokemon={pokemon}
        nature={nature}
        stat={pokemonStat}
        dynamax={dynamax}
        level={level}
      />
    </Container>
  );
};

export default IVChecker;
