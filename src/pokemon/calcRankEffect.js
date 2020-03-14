const calcRankEffect = ({ stat, rank }) => {
  const effect = {
    "-6": 25,
    "-5": 29,
    "-4": 33,
    "-3": 40,
    "-2": 50,
    "-1": 66,
    "0": 100,
    "1": 150,
    "2": 200,
    "3": 250,
    "4": 300,
    "5": 350,
    "6": 400,
  }[rank];

  return Math.floor((effect * stat) / 100);
};

export default calcRankEffect;
