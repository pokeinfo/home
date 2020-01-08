import { createElement } from 'react';
import '../css/Container.css';

const Container = (props) => {
  let { className } = props;
  className = (className || '') + ' container';
  return createElement('div', {
    ...props,
    className,
  });
}

export default Container;
