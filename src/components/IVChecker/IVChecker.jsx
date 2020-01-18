import React, { useState } from 'react';
import Grid from '../Grid';
import Container from '../Container';

import PokemonInput from './PokemonInput';
import NatureInput from './NatureInput';
import LevelInput from './LevelInput';
import DynamaxButton from './DynamaxButton';
import StatInput from './StatInput';
import IVResult from './IVResult';

import '../../css/IVChecker/IVChecker.css';

const DEV_MODE = (
  !process.env.NODE_ENV ||
  process.env.NODE_ENV === 'development'
);

const IVChecker = () => {
  const [ dynamax, setDynamax ] = useState(false);
  const [ level, setLevel ] = useState(DEV_MODE? 1 : null);
  const [ pokemon, setPokemon ] = useState(DEV_MODE? "꼬부기" : null);
  const [ nature, setNature ] = useState(DEV_MODE? "노력" : null);
  const [ pokemonStat, setPokemonStat ] = useState({});

  return (
    <Container id="iv-checker">
      <div>
        <h2>개체값 계산기</h2>
        <div>
          <PokemonInput
            pokemon={pokemon}
            onChange={setPokemon}
          />
          <Grid column="3:2" gap="1rem">
            <NatureInput
              nature={nature}
              onChange={setNature}
            />
            <LevelInput
              level={level}
              onChange={setLevel}
            />
          </Grid>
          <DynamaxButton
            dynamax={dynamax}
            onChange={dynamax => setDynamax(dynamax)}
          />
          <Grid column="3.5rem:1:1" gap="1rem">
            <div />
            <div className="center">실수치</div>
            <div className="center">노력치</div>
          </Grid>
          <StatInput
            stat={pokemonStat}
            onChange={setPokemonStat}
          />
        </div>
      </div>
      <div>
        <h2>결과</h2>
        <IVResult
          pokemon={pokemon}
          nature={nature}
          stat={pokemonStat}
          dynamax={dynamax}
          level={level}
        />
      </div>
    </Container>
  );
};

export default IVChecker;
