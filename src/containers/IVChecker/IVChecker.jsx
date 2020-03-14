import { connect } from "react-redux";
import IVChecker from "../../components/IVChecker/IVChecker";
import mapReduxStateToReactProps from "../getIsMobileState";

export default connect(mapReduxStateToReactProps)(IVChecker);
