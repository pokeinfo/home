import React, { Component, createElement } from 'react';
import '../css/Input.css';

function getValueFromEvent(event) {
  const { target } = event;
  const { value } = target;
  return [ value, target ];
}

class Input extends Component {
  constructor(props) {
    super(props);
    const { onChange } = props;
    this.state = { ...props };
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
    } = this.state;
    const inputPrpos = { ...this.state };
    delete inputPrpos.listID;
    delete inputPrpos.datalistComponent;
    const input = createElement('input', {
      ...inputPrpos,
      list: listID,
    });
    return (
      <div>
        {input}
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
      onChange
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
