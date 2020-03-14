const calcRealStat = ({
  type,
  pokemonIndex,
  level,
  baseStat,
  iv,
  ev,
  nature,
  dynamax,
}) => {
  if (
    // 필수 인자가 없는 경우
    ![type, level, baseStat, iv, ev].every(a => null != a)
  )
    return;

  if (!nature) nature = {};
  switch (type) {
    case "H":
      if (pokemonIndex === 292) return 1;
      return (
        (dynamax ? 2 : 1) *
        (Math.floor((level / 100) * (baseStat * 2 + iv + Math.floor(ev / 4))) +
          level +
          10)
      );

    case "A":
    case "B":
    case "C":
    case "D":
    case "S":
      return Math.floor(
        Math.floor(
          (level / 100) * (baseStat * 2 + iv + Math.floor(ev / 4)) + 5
        ) *
          (nature.up === type ? 1.1 : 1) *
          (nature.down === type ? 0.9 : 1)
      );

    default:
      throw TypeError("Invalid type");
  }
};

export default calcRealStat;
