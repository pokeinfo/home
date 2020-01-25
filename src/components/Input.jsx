import React, { useState } from 'react';
import Grid from './Grid';
import classNames from 'classnames';
import { toChosung } from 'enyg';
import { getValueFromEvent } from '../util/event';
import styles from '../scss/components/Input.module.scss';

const Input = ({
  onChange,
  className,
  label,
  ...inputPrpos
}) => {
  if (!onChange) throw TypeError("no onChange");

  inputPrpos.className = classNames(styles.input, className);
  inputPrpos.onChange = event => {
    const [ value, target, , setValue ] = getValueFromEvent(event);
    onChange(value, target, event, setValue);
  };

  return label? (
    <Grid column={label.length + ".5rem : 1"}>
      <div className={styles.label}>{label}</div>
      <input {...inputPrpos} />
    </Grid>
  ) : (
    <input {...inputPrpos} />
  );
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
      value = '';
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
  value,
  ...rest
}) => {
  const isValueExist = (value != null);
  const findItem = (name) => (
    list.find(item => item.name === name) || {}
  );
  const itemSelected = findItem(isValueExist? value : defaultValue).name;
  const [ inputValue, setInputValue ] = useState(defaultValue || '');
  rest.value = (isValueExist? value : inputValue) || '';

  const candidateItems = itemSelected? [] : list.filter(
    ({ name }) => toChosung(name).includes(toChosung(rest.value))
  );

  const sortedItems = candidateItems.sort((a, b) => {
    // 정렬: 앞의 글자와 입력값이 같다면 우선,
    //       이외의 경우는 일반적인 문자열 정렬.
    const { value } = rest;
    const { length: valueLength } = value;
    let [ aHead, bHead ] = [a, b].map(
      ({ name }) => name.slice(0, valueLength)
    );
    if (aHead === value) return -1;
    if (bHead === value) return 1;
    [ aHead, bHead ] = [aHead, bHead].map(toChosung);
    if (aHead === toChosung(value)) return -1;
    if (bHead === toChosung(value)) return 1;
    return a.name.localeCompare(b.name);
  });

  const options = (
    (sortedItems.length || itemSelected)
      ? sortedItems
      : list
  ).map(
    ({ name, key, value }) => <option value={value} key={key}>{name}</option>
  );

  const textInputOnChange = (newValue) => {
    if (!isValueExist) setInputValue(newValue);
    onChange(newValue);
  };

  const selectOnChange = (event) => {
    const [ newValue, , , setSelectValue ] = getValueFromEvent(event);
    setSelectValue(null);
    textInputOnChange(newValue);
  };

  const selectElemClassName = classNames(styles.selectWrapper, {
    hidden: itemSelected,
  });

  return (
    <Grid column={itemSelected? "1" : "1:1.5"}>
      <TextInput
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

const Select = ({
  list,
  onChange,
  ...rest
}) => {
  let defaultValue;
  const options = list.map(
    ({ name, key, value, selected }) => {
      if (selected) defaultValue = value;
      return (
        <option value={value} key={key}>
          {name}
        </option>
      );
    }
  );

  if (defaultValue != null) {
    rest.defaultValue = defaultValue;
  }

  const selectOnChange = (event) => {
    const [ value ] = getValueFromEvent(event);
    onChange(value);
  };

  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.input}
        onChange={selectOnChange}
        {...rest}
      >
        {options}
      </select>
    </div>
  );
};

export default Input;
export {
  TextInput,
  NumberInput,
  ListInput,
  Select,
};
