import React, { Component, useState } from 'react';
import Grid from './Grid';
import classNames from 'classnames';
import styles from '../css/components/Input.module.scss';

function getValueFromEvent(event) {
  const { target } = event;
  const { value } = target;
  const setValue = value => target.value = value;
  return [ value, target, event, setValue ];
}

class Input extends Component {
  constructor(props) {
    super(props);
    let {
      onChange,
      className,
      ...rest
    } = props;
    className = classNames(styles.input, className);
    this.inputPrpos = {
      className,
      ...rest,
    };
    if (onChange) {
      this.inputPrpos.onChange = event => {
        const [ value, target, , setValue ] = getValueFromEvent(event);
        this.setState({ value });
        onChange(value, target, event, setValue);
      };
    }
  }

  render() {
    return <input {...this.inputPrpos} />;
  }
}

class TextInput extends Input {
  constructor(props) {
    super(props);
    this.inputPrpos.type = 'text';
  }
}

class NumberInput extends Input {
  constructor(props) {
    super(props);
    const {
      min = -Infinity,
      max = Infinity,
      onChange,
    } = props;
    this.inputPrpos.type = 'number';
    this.inputPrpos.pattern = "\\d*";
    if (onChange) {
      this.inputPrpos.onChange = (event) => {
        let [ value, target, , setValue ] = getValueFromEvent(event);
        if (value.trim() === "" || isNaN(+value)) {
          value = NaN;
        } else {
          value = Math.min(Math.max(+value, min), max);
          setValue(value);
        }
        onChange(value, target, event);
      };
    }
  }
}

const ListInput = ({
  list,
  onChange,
  defaultValue,
  ...rest
}) => {
  const findItem = (name) => (list.find(item => item.name === name) || {});
  const defaultSelecteValue = findItem(defaultValue).name;
  const [ itemSelected, setItemSelected ] = useState(defaultSelecteValue);
  const [ inputValue, setInputValue ] = useState(defaultValue || '');

  const candidateItems = itemSelected? [] : list.filter(
    ({ name }) => name.includes(inputValue)
  );

  const sortedItems = candidateItems.sort((a, b) => {
    // 정렬: 앞의 글자와 입력값이 같다면 우선,
    //       이외의 경우는 일반적인 문자열 정렬.
    const { length: valueLength } = inputValue;
    const [ aName, bName ] = [a, b].map(
      ({ name }) => name.slice(0, valueLength)
    );
    if (aName === inputValue) return -1;
    if (bName === inputValue) return 1;
    return a.name.localeCompare(b.name);
  });

  const options = (
    sortedItems.length
      ? sortedItems
      : list
  ).map(
    ({ name, key, value }) => <option value={value} key={key}>{name}</option>
  );

  const textInputOnChange = (value) => {
    const item = findItem(value.trim());
    console.log({item, value});
    setInputValue(value);
    setItemSelected(!!item.name);
    onChange(value);
  };

  const selectOnChange = (event) => {
    const [ value, , , setValue ] = getValueFromEvent(event);
    setValue(null);
    setInputValue(value);
    setItemSelected(!!value);
  };

  const selectElemClassName = classNames(styles.selectWrapper, {
    hidden: itemSelected,
  });

  return (
    <Grid column={itemSelected? "1" : "1:1.5"}>
      <input
        type="text"
        value={inputValue}
        onChange={
          event => textInputOnChange(...getValueFromEvent(event))
        }
        className={styles.input}
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
}

export default Input;
export {
  TextInput,
  NumberInput,
  ListInput,
};
