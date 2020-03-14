import { connect } from "react-redux";
import SelectPokemon from "../../components/Pokemon/SelectPokemon";

const mapReduxStateToReactProps = ({ ivChecker }) => ({
  value: ivChecker.base || "",
});

const mapReduxDispatchToReactProps = dispatch => ({
  onChange: base => {
    dispatch({
      type: "IV_CHECKER_POKEMON_UPDATE",
      newPokemon: { base },
    });
  },
});

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(SelectPokemon);
