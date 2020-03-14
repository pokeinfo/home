export default (state, { newPokemon, id }) => ({
  ...state,
  speedChecker: {
    ...state.speedChecker,
    [id]: {},
  },
});
