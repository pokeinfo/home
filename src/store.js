import { createStore } from 'redux';
import deepMerge from 'deepmerge';
import isMobileMediaQuery from './util/isMobileMediaQuery';

const defaultState = {
  isMobile: isMobileMediaQuery.matches,
  isNavOpen: false,
  ivChecker: {},
  speedChecker: {},
};

const reducer = (state, action) => {
  const createState = (newState) => ({...state, ...newState});

  if (!state) return defaultState;

  switch (action.type) {
    case 'CHAGE_IS_MOBILE': return createState({
      isMobile: action.isMobile,
    });

    case 'OPEN_NAV': return createState({
      isNavOpen: true,
    });

    case 'CLOSE_NAV': return createState({
      isNavOpen: false,
    });

    case 'TOGGLE_NAV': return createState({
      isNavOpen: !state.isNavOpen,
    });

    case 'IV_CHECKER_POKEMON_UPDATE': return createState({
      ivChecker: deepMerge(
        state.ivChecker,
        action.newPokemon,
      ),
    });

    case 'IV_CHECKER_POKEMON_RESET': return createState({
      ivChecker: defaultState.ivChecker,
    });

    case 'SPEED_CHECKER_POKEMON_UPDATE': return createState({
      speedChecker: {
        ...state.speedChecker,
        [action.id]: deepMerge(
          state.speedChecker[action.id],
          action.newPokemon,
        ),
      },
    });

    case 'SPEED_CHECKER_POKEMON_RESET': return createState({
      speedChecker: {
        ...state.speedChecker,
        [action.id]: {},
      },
    });

    case 'SPEED_CHECKER_POKEMON_SWAP': return createState({
      speedChecker: {
        my: state.speedChecker.enemy,
        enemy: state.speedChecker.my,
      },
    });

    default:
      throw TypeError("Unknown action.type");
  }
}

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

const store = createStore(
  reducer,
  __REDUX_DEVTOOLS_EXTENSION__
  && __REDUX_DEVTOOLS_EXTENSION__()
);

isMobileMediaQuery.addListener(({ matches }) => {
  store.dispatch({
    type: 'CHAGE_IS_MOBILE',
    isMobile: matches,
  });
});

window.store = store;
export default store;
