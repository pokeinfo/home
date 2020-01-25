import { connect } from 'react-redux';
import Buttons from '../../components/IVChecker/Buttons';

const mapReduxDispatchToReactProps = (dispatch) => ({
  onChange: (newPokemon) => {
    dispatch({
      type: 'IV_CHECKER_POKEMON_UPDATE',
      newPokemon,
    });
  },

  onClickDelete: () => {
    dispatch({
      type: 'IV_CHECKER_POKEMON_RESET',
    });
  },
});

export default connect(
  null,
  mapReduxDispatchToReactProps,
)(Buttons);
