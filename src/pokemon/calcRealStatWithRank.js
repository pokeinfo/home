import calcRealStat from './calcRealStat';
import calcRankEffect from './calcRankEffect';

const calcRealStatWithRank = ({
  rank,
  effect,
  ...pokemon
}) => {
  return calcRankEffect({
    rank,
    stat: Math.floor(
      effect * calcRealStat({
        ...pokemon,
        type: 'S',
      })
    )
  });
};

export default calcRealStatWithRank;
