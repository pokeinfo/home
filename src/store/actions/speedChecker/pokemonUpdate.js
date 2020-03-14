import deepMerge from "deepmerge";

export default (state, { newPokemon, id }) => ({
  ...state,
  speedChecker: {
    ...state.speedChecker,
    [id]: deepMerge(state.speedChecker[id], newPokemon),
  },
});
