import React from 'react';
import '../css/Grid.css';

import classNames from 'classnames';

function createGridStyle({column, row, gap}) {
  [
    column,
    row,
  ] = [
    column,
    row,
  ].map(
    value => (value || '').split(':').map(
      ratio => isNaN(ratio)? ratio : `${ratio}fr`
    ).join(' ')
  );

  return {
    gridTemplateColumns: column,
    gridTemplateRows: row,
    gridGap: gap,
  };
}

const Grid = ({
  column,
  row,
  gap,
  style,
  className,
  ...rest
}) => {
  rest.className = classNames('grid', className);
  rest.style = {
    ...(style || {}),
    ...createGridStyle({ column, row, gap }),
  };
  return (
    <div {...rest} />
  );
}

export default Grid;
