import React, { Component } from 'react';
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
    this.state = {
      className,
      ...rest,
    };
    if (onChange) {
      this.state.onChange = event => {
        onChange(...getValueFromEvent(event));
      };
    }
  }

  render() {
    const {
      listID,
      datalistComponent,
      ...inputPrpos
    } = this.state;
    return (
      <div>
        <input list={listID} {...inputPrpos} />
        {datalistComponent}
      </div>
    );
  }
}

class TextInput extends Input {
  constructor(props) {
    super(props);
    this.state.type = 'text';
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
    this.state.type = 'number';
    this.state.pattern = "\\d*";
    if (onChange) {
      this.state.onChange = (event) => {
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

class ListInput extends Input {
  constructor(props) {
    super(props);
    const listID = 'ListInputID' + Math.random();
    const listItems = props.list.map(
      value => <option value={value} key={'ListInputItem' + Math.random()} />
    );
    const datalistComponent = (
      <datalist id={listID}>
        {listItems}
      </datalist>
    );
    this.state = {
      ...this.state,
      listID,
      datalistComponent,
    };
  }
}

export default Input;
export {
  TextInput,
  NumberInput,
  ListInput,
};
