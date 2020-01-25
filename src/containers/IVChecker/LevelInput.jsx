import { connect } from 'react-redux';
import LevelInput from '../../components/Pokemon/LevelInput';

const mapReduxStateToReactProps = ({
  ivChecker,
}) => ({
  value: (ivChecker.level || ''),
});

const mapReduxDispatchToReactProps = (dispatch) => ({
  onChange: (level) => {
    dispatch({
      type: 'IV_CHECKER_POKEMON_UPDATE',
      newPokemon: { level },
    });
  },
});

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps,
)(LevelInput);
