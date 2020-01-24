import React from 'react';
import Grid from '../Grid';
import Container from '../Container';
import { Box } from '../Container';

import calcRealStatWithRank from '../../pokemon/calcRealStatWithRank';

function getMessage(realStat) {
  const gap = Math.abs(realStat.my - realStat.enemy);
  if (gap === 0)
    return "스피드 같음, 매턴 랜덤으로 선공 결정.";

  if (realStat.my > realStat.enemy)
    return `+${gap} 추월 성공, 자신 포켓몬의 선공.`;

  if (realStat.my < realStat.enemy)
    return `-${gap} 추월 실패, 상대 포켓몬의 선공.`;

  return "값을 모두 입력해주세요...";
}

const SpeedResult = ({
  myPokemon,
  enemyPokemon,
}) => {
  const numberToNature = (number) => {
    switch (number) {
      case 0.9: return { down: 'S' };
      case 1.1: return { up: 'S' };
      default: return {};
    }
  };

  const getSpeedRealStat = (pokemon) => {
    return calcRealStatWithRank({
      ...pokemon,
      type: 'S',
      nature: numberToNature(pokemon.nature),
    });
  };

  const realStat = {
    my: getSpeedRealStat(myPokemon),
    enemy: getSpeedRealStat(enemyPokemon),
  };

  return (
    <Box className="center">
      <Container maxWidth={330}>
        <Grid column="1:1:1">
            <p />
            <p>종족값</p>
            <p>실수치</p>

            <p>자신</p>
            <p>{myPokemon.baseStat || "???"}</p>
            <p>{realStat.my || "???"}</p>

            <p>상대</p>
            <p>{enemyPokemon.baseStat || "???"}</p>
            <p>{realStat.enemy || "???"}</p>
        </Grid>
      </Container>

      <Container>
        <p>{getMessage(realStat)}</p>
      </Container>
    </Box>
  );
};

export default SpeedResult;
