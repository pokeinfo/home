import { connect } from "react-redux";
import SpeedResult from "../../components/SpeedChecker/SpeedResult";

const mapReduxStateToReactProps = ({ speedChecker }) => ({
  myPokemon: speedChecker.my,
  enemyPokemon: speedChecker.enemy,
});

export default connect(mapReduxStateToReactProps)(SpeedResult);
