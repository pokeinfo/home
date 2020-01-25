import React from 'react';
import Container from '../Container';
import Title from '../Title';
import Grid from '../Grid';

import PokemonInput from '../../containers/SpeedChecker/PokemonInput';
import SpeedResult from '../../containers/SpeedChecker/SpeedResult';

const SpeedChecker = ({ isMobile }) => {
  return (
    <Container>
      <Title>스피드 추월 계산기</Title>
      <Grid column={isMobile? "1" : "1:1"} gap={isMobile? 0 : "1rem"}>
        <PokemonInput title="내 포켓몬" id="my" />
        <PokemonInput title="상대 포켓몬" id="enemy" />
      </Grid>
      <SpeedResult />
    </Container>
  );
}

export default SpeedChecker;
