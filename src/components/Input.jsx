import React, { useState } from 'react';
import Grid from './Grid';
import classNames from 'classnames';
import { toChosung } from 'enyg';
import { getValueFromEvent } from '../util/event';
import styles from '../scss/components/Input.module.scss';

const Input = ({
  onChange,
  className,
  ...inputPrpos
}) => {
  if (!onChange) throw TypeError("no onChange");
  inputPrpos.className = classNames(styles.input, className);
  inputPrpos.onChange = event => {
    const [ value, target, , setValue ] = getValueFromEvent(event);
    onChange(value, target, event, setValue);
  };
  return <input {...inputPrpos} />;
};

const TextInput = ({
  ...inputPrpos
}) => {
  inputPrpos.type = 'text';
  return <Input {...inputPrpos} />;
};

const NumberInput = ({
  min = -Infinity,
  max = Infinity,
  onChange,
  ...inputPrpos
}) => {
  if (!onChange) throw TypeError("no onChange");
  inputPrpos.type = 'number';
  inputPrpos.pattern = "\\d*";
  inputPrpos.onChange = (value, target, event, setValue) => {
    if (value.trim() === "" || isNaN(+value)) {
      value = NaN;
    } else {
      value = Math.min(Math.max(+value, min), max);
      setValue(value);
    }
    onChange(value, target, event, setValue);
  };

  return <Input {...inputPrpos} />;
};

const ListInput = ({
  list,
  onChange,
  defaultValue,
  ...rest
}) => {
  const findItem = (name) => (
    list.find(item => item.name === name) || {}
  );
  const defaultSelecteValue = findItem(defaultValue).name;
  const [ itemSelected, setItemSelected ] = useState(defaultSelecteValue);
  const [ inputValue, setInputValue ] = useState(defaultValue || '');

  const candidateItems = itemSelected? [] : list.filter(
    ({ name }) => toChosung(name).includes(toChosung(inputValue))
  );

  const sortedItems = candidateItems.sort((a, b) => {
    // 정렬: 앞의 글자와 입력값이 같다면 우선,
    //       이외의 경우는 일반적인 문자열 정렬.
    const { length: valueLength } = inputValue;
    let [ aHead, bHead ] = [a, b].map(
      ({ name }) => name.slice(0, valueLength)
    );
    if (aHead === inputValue) return -1;
    if (bHead === inputValue) return 1;
    [ aHead, bHead ] = [aHead, bHead].map(toChosung);
    if (aHead === toChosung(inputValue)) return -1;
    if (bHead === toChosung(inputValue)) return 1;
    return a.name.localeCompare(b.name);
  });

  const options = (
    (sortedItems.length || itemSelected)
      ? sortedItems
      : list
  ).map(
    ({ name, key, value }) => <option value={value} key={key}>{name}</option>
  );

  const textInputOnChange = (value) => {
    const item = findItem(value.trim());
    setInputValue(value);
    setItemSelected(!!item.name);
    onChange(value);
  };

  const selectOnChange = (event) => {
    const [ value, , , setValue ] = getValueFromEvent(event);
    setValue(null);
    setInputValue(value);
    setItemSelected(!!value);
    onChange(value);
  };

  const selectElemClassName = classNames(styles.selectWrapper, {
    hidden: itemSelected,
  });

  return (
    <Grid column={itemSelected? "1" : "1:1.5"}>
      <TextInput
        value={inputValue}
        onChange={value => textInputOnChange(value)}
        {...rest}
      />
      <div className={selectElemClassName}>
        <select
          className={styles.input}
          onChange={selectOnChange}
        >
          <option value="">: {options.length}개의 항목</option>
          {options}
        </select>
      </div>
    </Grid>
  );
};

export default Input;
export {
  TextInput,
  NumberInput,
  ListInput,
};
