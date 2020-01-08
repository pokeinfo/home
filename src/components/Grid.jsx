import React from 'react';
import '../css/Grid.css';

function createGridStyle({column, row}) {
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
  };
}

const Grid = ({
  children,
  column,
  row,
}) => (
  <div
    className="grid"
    style={createGridStyle({column, row})}
  >
    {children}
  </div>
);

export default Grid;
