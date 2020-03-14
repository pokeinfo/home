import { connect } from "react-redux";
import IVResult from "../../components/IVChecker/IVResult";

const mapReduxStateToReactProps = ({
  ivChecker: { base, nature, stat, dynamax, level },
}) => ({
  pokemon: base,
  nature,
  stat,
  dynamax,
  level,
});

export default connect(mapReduxStateToReactProps)(IVResult);
