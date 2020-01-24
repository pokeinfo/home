import React, { useState, useEffect } from 'react';
import Grid from '../Grid';
import Container, { BoxContainer } from '../Container';
import Title from '../Title';
import { CenteredText } from '../Text';

import ThreeGrid from './ThreeGrid';
import SelectPokemon from '../Pokemon/SelectPokemon';
import SelectNature from '../Pokemon/SelectNature';
import LevelInput from '../Pokemon/LevelInput';
import DynamaxButton from '../Pokemon/DynamaxButton';
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
      <Grid column={isMobile? "1" : "1:1"} gap={isMobile? "0" : "1rem"}>
        <BoxContainer>
          <div>
            <SelectPokemon
              pokemon={pokemon}
              onChange={setPokemon}
            />
            <Grid column="3:2" gap="1rem">
              <SelectNature
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
