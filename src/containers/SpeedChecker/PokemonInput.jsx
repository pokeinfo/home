import { connect } from 'react-redux';
import PokemonInput from '../../components/SpeedChecker/PokemonInput';

const mapReduxStateToReactProps = ({ speedChecker }, { id }) => ({
  pokemon: speedChecker[id],
});

const mapReduxDispatchToReactProps = (dispatch, { id }) => ({
  onChange: (newPokemon) => {
    dispatch({
      type: 'SPEED_CHECKER_POKEMON_UPDATE',
      id,
      newPokemon,
    });
  },

  onClickDelete: () => {
    dispatch({
      type: 'SPEED_CHECKER_POKEMON_RESET',
      id,
    });
  },
});

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps,
)(PokemonInput);
