import React from 'react';
import '../css/Grid.css';

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
  children,
  column,
  row,
  gap,
}) => (
  <div
    className="grid"
    style={createGridStyle({column, row, gap})}
  >
    {children}
  </div>
);

export default Grid;
