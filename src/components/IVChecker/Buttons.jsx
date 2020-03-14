import React from "react";
import Grid from "../Grid";
import Button from "../Button";

const statList = [..."HABCDS"];

const Buttons = ({ onChange, onClickDelete }) => {
  const resetStat = (key, value) => () => {
    const stat = {};
    statList.forEach(_key => {
      return (stat[_key] = {
        [key]: value,
      });
    });
    onChange({ stat });
  };

  return (
    <Grid column="1:1:1" gap=".5rem">
      <Button title="모두 초기화" onClick={onClickDelete} />
      <Button title="실수치 초기화" onClick={resetStat("realStat", "")} />
      <Button title="노력치 초기화" onClick={resetStat("ev", 0)} />
    </Grid>
  );
};

export default Buttons;
