import React from 'react';
import '../css/Container.css';

import classNames from 'classnames';

const Container = ({
  className,
  ...rest
}) => {
  rest.className = classNames(className, 'container');
  return (
    <div {...rest} />
  );
}

export default Container;
