import { connect } from 'react-redux';
import SpeedChecker from '../../components/SpeedChecker/SpeedChecker';
import mapReduxStateToReactProps from '../getIsMobileState';

const mapReduxDispatchToReactProps = (dispatch, { id }) => ({
  onClickSwap: () => {
    dispatch({
      type: 'SPEED_CHECKER_POKEMON_SWAP',
    });
  },
});

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps,
)(SpeedChecker);
