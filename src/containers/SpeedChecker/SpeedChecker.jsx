import { connect } from 'react-redux';
import SpeedChecker from '../../components/SpeedChecker/SpeedChecker';
import mapReduxStateToReactProps from '../getIsMobileState';

export default connect(mapReduxStateToReactProps)(SpeedChecker);
