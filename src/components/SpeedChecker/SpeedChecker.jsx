import React from "react";
import Container from "../Container";
import Button from "../Button";
import Title from "../Title";
import Grid from "../Grid";

import PokemonInput from "../../containers/SpeedChecker/PokemonInput";
import SpeedResult from "../../containers/SpeedChecker/SpeedResult";

const SpeedChecker = ({ isMobile, onClickSwap }) => {
  return (
    <Container>
      <Title>스피드 추월 계산기</Title>
      <Grid column={isMobile ? "1" : "3:1:3"} gap={isMobile ? 0 : "1rem"}>
        <PokemonInput title="내 포켓몬" id="my" />
        <Button
          title="포켓몬 교체"
          className="vertical-center"
          onClick={onClickSwap}
        />
        <PokemonInput title="상대 포켓몬" id="enemy" />
      </Grid>
      <SpeedResult />
    </Container>
  );
};

export default SpeedChecker;
