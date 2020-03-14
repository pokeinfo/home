import { connect } from "react-redux";
import DynamaxButton from "../../components/Pokemon/DynamaxButton";

const mapReduxStateToReactProps = ({ ivChecker }) => ({
  dynamax: ivChecker.dynamax,
});

const mapReduxDispatchToReactProps = dispatch => ({
  onChange: dynamax => {
    dispatch({
      type: "IV_CHECKER_POKEMON_UPDATE",
      newPokemon: { dynamax },
    });
  },
});

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DynamaxButton);
