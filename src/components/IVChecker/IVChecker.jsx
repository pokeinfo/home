import React from "react";
import Grid from "../Grid";
import Container, { BoxContainer } from "../Container";
import Title from "../Title";
import { CenteredText } from "../Text";

import ThreeGrid from "./ThreeGrid";
import SelectPokemon from "../../containers/IVChecker/SelectPokemon";
import SelectNature from "../../containers/IVChecker/SelectNature";
import LevelInput from "../../containers/IVChecker/LevelInput";
import DynamaxButton from "../../containers/IVChecker/DynamaxButton";
import StatInput from "../../containers/IVChecker/StatInput";
import Buttons from "../../containers/IVChecker/Buttons";
import IVResult from "../../containers/IVChecker/IVResult";

const IVChecker = ({ isMobile }) => {
  return (
    <Container>
      <Title>개체값 계산기</Title>
      <Grid column={isMobile ? "1" : "1:1"} gap={isMobile ? "0" : "1rem"}>
        <BoxContainer>
          <div>
            <SelectPokemon />
            <Grid column="3:2" gap="1rem">
              <SelectNature />
              <LevelInput />
            </Grid>
            <DynamaxButton />
            <ThreeGrid>
              <div />
              <CenteredText>실수치</CenteredText>
              <CenteredText>노력치</CenteredText>
            </ThreeGrid>
            <StatInput />
            <br />
            <Buttons />
          </div>
        </BoxContainer>
        <BoxContainer>
          <Title>결과</Title>
          <IVResult />
        </BoxContainer>
      </Grid>
    </Container>
  );
};

export default IVChecker;
