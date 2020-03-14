import React from "react";
import classNames from "classnames";
import styles from "../scss/components/Grid.module.scss";

function createGridStyle({ column, row, gap }) {
  [column, row] = [column, row].map(value => {
    return (value || "")
      .split(":")
      .map(ratio => (isNaN(ratio) ? ratio : `${ratio}fr`))
      .join(" ");
  });

  return {
    gridTemplateColumns: column,
    gridTemplateRows: row,
    gridGap: gap,
  };
}

const Grid = ({ column, row, gap, style, className, ...rest }) => {
  rest.className = classNames(styles.grid, className);
  rest.style = {
    ...(style || {}),
    ...createGridStyle({ column, row, gap }),
  };
  return <div {...rest} />;
};

export default Grid;
