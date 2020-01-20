import React, { Component } from 'react';

const LoadingAnimation = () => <div>loading...</div>;
const loadedModules = {};

class AsyncComponent extends Component {
  state = {
    isLoading: true,
  };

  constructor(props) {
    super(props);
    const { loader, id } = props;
    this.id = id;
    this.loader = loader;
  }

  async componentDidMount() {
    const { loader, id } = this;
    const promise = loadedModules[id] || loader();
    const component = await promise;
    this.setState({
      isLoading: false,
      component,
    });
  }

  render() {
    const { isLoading, component } = this.state;
    const LoadedComponent = isLoading
                            ? LoadingAnimation
                            : component;
    return <LoadedComponent />;
  }
}

const AsyncDefaultComponent = ({ loader }) => (
  <AsyncComponent loader={
    async () => {
      const {
        default: component,
      } = await loader;
      return component;
    }
  } />
);

export default AsyncComponent;
export {
  AsyncDefaultComponent,
};
