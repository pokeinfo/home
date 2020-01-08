import React, { Component, createElement } from 'react';
import '../css/Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = props;
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
    this.state = {
      ...this.state,
      type: 'text',
    };
  }
}

class NumberInput extends Input {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      type: 'number',
    };
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
