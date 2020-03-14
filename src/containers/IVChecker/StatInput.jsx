import { connect } from "react-redux";
import StatInput from "../../components/IVChecker/StatInput";

const mapReduxStateToReactProps = ({ ivChecker }) => ({
  stat: ivChecker.stat,
});

const mapReduxDispatchToReactProps = dispatch => ({
  onChange: stat => {
    dispatch({
      type: "IV_CHECKER_POKEMON_UPDATE",
      newPokemon: { stat },
    });
  },
});

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(StatInput);
