import { createElement } from 'react';
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

const Grid = (props) => {
  let { column, row, gap, style, className } = props;
  className = classNames('grid', className);
  style = {
    ...(style || {}),
    ...createGridStyle({ column, row, gap }),
  };
  [ column, row, gap ] = [];
  return createElement('div', {
    ...props,
    style,
    className,
    column,
    row,
    gap,
  });
}

export default Grid;
