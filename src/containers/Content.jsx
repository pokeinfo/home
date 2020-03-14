import { connect } from "react-redux";
import Content from "../components/Content";
import mapReduxStateToReactProps from "./getIsMobileState";

export default connect(mapReduxStateToReactProps)(Content);
