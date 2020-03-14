export default ({ speedChecker, ...state }) => ({
  ...state,
  speedChecker: {
    my: speedChecker.enemy,
    enemy: speedChecker.my,
  },
});
