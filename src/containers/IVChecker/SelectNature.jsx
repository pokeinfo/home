import { connect } from 'react-redux';
import SelectNature from '../../components/Pokemon/SelectNature';

const mapReduxStateToReactProps = ({
  ivChecker,
}) => ({
  value: (ivChecker.nature || ''),
});

const mapReduxDispatchToReactProps = (dispatch) => ({
  onChange: (nature) => {
    dispatch({
      type: 'IV_CHECKER_POKEMON_UPDATE',
      newPokemon: { nature },
    });
  },
});

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps,
)(SelectNature);
