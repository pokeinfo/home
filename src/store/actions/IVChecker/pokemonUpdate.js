import deepMerge from "deepmerge";

export default (state, { newPokemon }) => ({
  ...state,
  ivChecker: deepMerge(state.ivChecker, newPokemon),
});
