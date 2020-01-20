import React from 'react';
import { NumberInput } from '../Input';

import ThreeGrid from './ThreeGrid';

const StatInput = ({stat, onChange}) => {
  const { StatForm } = StatInput;
  return (
    <div>
      <StatForm name="HP" type="H" onChange={onChange} />
      <StatForm name="공격" type="A" onChange={onChange} />
      <StatForm name="방어" type="B" onChange={onChange} />
      <StatForm name="특공" type="C" onChange={onChange} />
      <StatForm name="특방" type="D" onChange={onChange} />
      <StatForm name="스피드" type="S" onChange={onChange} />
    </div>
  );
};

StatInput.StatForm = ({
  name,
  statKey,
  type,
  onChange,
}) => {
  const setValue = (newValue) => onChange(
    stat => ({
      ...stat,
      [ type ]: {
        ev: 0,
        ...stat[type],
        ...newValue,
      },
    })
  );

  const setRealStat = realStat => setValue({ realStat });
  const setEV = ev => setValue({ ev });

  return (
    <ThreeGrid>
      <div style={{ margin: 'auto 0' }}>{name}</div>
      <NumberInput
        placeholder={name + " 실수치"}
        min={1}
        onChange={setRealStat}
        className="center"
      />
      <NumberInput
        placeholder={name + " 노력치"}
        defaultValue={0}
        min={0}
        max={252}
        onChange={setEV}
        className="center"
      />
    </ThreeGrid>
  );
};

export default StatInput;
