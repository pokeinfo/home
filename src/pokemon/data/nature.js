import findByName from '../../util/findByName';

function mapList(...list) {
  return list.map( ([ name, up, down ]) => ({ name, up, down }) );
}

export function findNatureByName(name) {
  return findByName(pokemonNatures, name);
}

const pokemonNatures = mapList(
  [ "외로움", "A", "B" ],
  [ "고집", "A", "C" ],
  [ "개구쟁이", "A", "D" ],
  [ "용감", "A", "S" ],
  [ "대담한", "B", "A" ],
  [ "장난꾸러기", "B", "C" ],
  [ "촐랑", "B", "D" ],
  [ "무사태평", "B", "S" ],
  [ "조심", "C", "A" ],
  [ "의젓", "C", "B" ],
  [ "덜렁", "C", "D" ],
  [ "냉정", "C", "S" ],
  [ "차분", "D", "A" ],
  [ "얌전", "D", "B" ],
  [ "신중", "D", "C" ],
  [ "건방", "D", "S" ],
  [ "겁쟁이", "S", "A" ],
  [ "성급", "S", "B" ],
  [ "명랑", "S", "C" ],
  [ "천진난만", "S", "D" ],
  [ "수줍음" ],
  [ "노력" ],
  [ "온순" ],
  [ "변덕" ],
  [ "성실" ],
);

export default pokemonNatures;
