import { createElement } from 'react';
import '../css/Container.css';

import classNames from 'classnames';

const Container = (props) => {
  let { className } = props;
  className = classNames(className, 'container');
  return createElement('div', {
    ...props,
    className,
  });
}

export default Container;
