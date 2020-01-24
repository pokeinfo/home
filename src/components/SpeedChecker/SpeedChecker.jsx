import React, { useState, useEffect } from 'react';
import Container from '../Container';
import Title from '../Title';
import Grid from '../Grid';

import PokemonInput from './PokemonInput';
import SpeedResult from './SpeedResult';

const SpeedChecker = () => {
  const { isMobileMediaQuery } = window;
  const [ myPokemon, setMyPokemon ] = useState({});
  const [ enemyPokemon, setEnemyPokemon ] = useState({});
  const [ isMobile, setIsMobile ] = useState(isMobileMediaQuery.matches);

  useEffect(() => {
    isMobileMediaQuery.addListener(({ matches }) => {
      setIsMobile(matches);
    });
  }, [ isMobileMediaQuery ]);

  return (
    <Container>
      <Title>스피드 추월 계산기</Title>
      <Grid column={isMobile? "1" : "1:1"} gap={isMobile? 0 : "1rem"}>
        <PokemonInput title="내 포켓몬" onChange={setMyPokemon} />
        <PokemonInput title="상대 포켓몬" onChange={setEnemyPokemon} />
      </Grid>
      <SpeedResult
        myPokemon={myPokemon}
        enemyPokemon={enemyPokemon}
      />
    </Container>
  );
}

export default SpeedChecker;
