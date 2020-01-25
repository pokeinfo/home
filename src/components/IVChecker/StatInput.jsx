import React from 'react';
import { NumberInput } from '../Input';

import ThreeGrid from './ThreeGrid';

const StatInput = (props) => {
  const { StatForm } = StatInput;
  return (
    <div>
      <StatForm name="HP" type="H" {...props} />
      <StatForm name="공격" type="A" {...props} />
      <StatForm name="방어" type="B" {...props} />
      <StatForm name="특공" type="C" {...props} />
      <StatForm name="특방" type="D" {...props} />
      <StatForm name="스피드" type="S" {...props} />
    </div>
  );
};

StatInput.StatForm = ({
  name,
  type,
  stat = {},
  onChange,
}) => {
  const setValue = (newValue) => onChange({
    [ type ]: {
      ev: 0,
      ...newValue,
    },
  });

  const {
    ev = 0,
    realStat = '',
  } = stat[type] || {};

  const setRealStat = realStat => setValue({ realStat });
  const setEV = ev => setValue({ ev });

  return (
    <ThreeGrid>
      <div style={{ margin: 'auto 0' }}>{name}</div>
      <NumberInput
        placeholder={name + " 실수치"}
        min={1}
        value={realStat}
        onChange={setRealStat}
        className="center"
      />
      <NumberInput
        placeholder={name + " 노력치"}
        min={0}
        max={252}
        value={ev}
        onChange={setEV}
        className="center"
      />
    </ThreeGrid>
  );
};

export default StatInput;
