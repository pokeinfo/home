import React, { useState, useEffect } from 'react';
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

const IVChecker = () => {
  const [ dynamax, setDynamax ] = useState(false);
  const [ level, setLevel ] = useState();
  const [ pokemon, setPokemon ] = useState();
  const [ nature, setNature ] = useState();
  const [ pokemonStat, setPokemonStat ] = useState({});
  const { isMobileMediaQuery } = window;
  const [ isMobile, setIsMobile ] = useState(isMobileMediaQuery.matches);

  useEffect(() => {
    isMobileMediaQuery.addListener(({ matches }) => {
      setIsMobile(matches);
    });
  }, [ isMobileMediaQuery ]);

  return (
    <Container>
      <Title>개체값 계산기</Title>
      <Grid column={isMobile? "1" : "1:1"} gap="1rem">
        <BoxContainer>
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
            isMobile={isMobile}
            pokemon={pokemon}
            nature={nature}
            stat={pokemonStat}
            dynamax={dynamax}
            level={level}
          />
        </BoxContainer>
      </Grid>
    </Container>
  );
};

export default IVChecker;
