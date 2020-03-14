import { createStore } from "redux";
import toCamelCase from "to-camel-case";
import actions from "./actions";
import isMobileMediaQuery from "../util/isMobileMediaQuery";

const defaultState = {
  isMobile: isMobileMediaQuery.matches,
  isNavOpen: false,
  ivChecker: {},
  speedChecker: {},
};

const reducer = (state, { type, ...action }) => {
  return state ? actions[toCamelCase(type)](state, action) : defaultState;
};

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

const store = createStore(
  reducer,
  __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
);

isMobileMediaQuery.addListener(({ matches }) => {
  store.dispatch({
    type: "CHAGE_IS_MOBILE",
    isMobile: matches,
  });
});

window.store = store;
export default store;
