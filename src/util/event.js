export function getValueFromEvent(event) {
  const { target } = event;
  const { value } = target;
  const setValue = value => (target.value = value);
  return [value, target, event, setValue];
}
