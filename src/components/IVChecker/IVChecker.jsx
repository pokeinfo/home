import React, { useState } from 'react';
import Grid from '../Grid';
import Container, { BoxContainer } from '../Container';
import Title from '../Title';
import { CenteredText } from '../Text';

import ThreeGrid from './ThreeGrid';
import PokemonInput from './PokemonInput';
import NatureInput from './NatureInput';
import LevelInput from './LevelInput';
import DynamaxButton from './DynamaxButton';
import StatInput from './StatInput';
import IVResult from './IVResult';

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
      <BoxContainer>
        <Title>개체값 계산기</Title>
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
            onChange={setDynamax}
          />
          <ThreeGrid>
            <div />
            <CenteredText>실수치</CenteredText>
            <CenteredText>노력치</CenteredText>
          </ThreeGrid>
          <StatInput
            stat={pokemonStat}
            onChange={setPokemonStat}
          />
        </div>
      </BoxContainer>
      <BoxContainer>
        <Title>결과</Title>
        <IVResult
          pokemon={pokemon}
          nature={nature}
          stat={pokemonStat}
          dynamax={dynamax}
          level={level}
        />
      </BoxContainer>
    </Container>
  );
};

export default IVChecker;
