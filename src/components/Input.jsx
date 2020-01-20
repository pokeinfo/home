import React, { Component } from 'react';
import styles from '../css/components/Input.module.scss';

import classNames from 'classnames';

function getValueFromEvent(event) {
  const { target } = event;
  const { value } = target;
  return [ value, target ];
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
        onChange(...getValueFromEvent(event), event);
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
    if (onChange) {
      this.state.onChange = (event) => {
        let [ value, target ] = getValueFromEvent(event);
        if (value.trim() === "" || isNaN(+value)) {
          value = NaN;
        } else {
          value = Math.min(Math.max(+value, min), max);
          event.target.value = value;
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
