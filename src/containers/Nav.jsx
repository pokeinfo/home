import { connect } from "react-redux";
import Nav, { NavOpenButton as _NavOpenButton } from "../components/Nav";

const mapReduxStateToReactProps = ({ isNavOpen, isMobile }) => ({
  isOpen: isNavOpen,
  isMobile,
});

export default connect(mapReduxStateToReactProps, dispatch => ({
  onClickClose: () => {
    dispatch({ type: "CLOSE_NAV" });
  },
}))(Nav);

export const NavOpenButton = connect(mapReduxStateToReactProps, dispatch => ({
  onClick: () => {
    dispatch({ type: "OPEN_NAV" });
  },
}))(_NavOpenButton);
