import React from "react";
import Grid from "../Grid";

const ThreeGrid = ({ isDesktop, ...rest }) => {
  return (
    <Grid column={isDesktop ? "1:1" : "3.5rem:1:1"} gap="1rem" {...rest} />
  );
};

export default ThreeGrid;
