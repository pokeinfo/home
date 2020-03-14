import React, { Component } from "react";
import LoadingAnimation from "./LoadingAnimation";

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
    try {
      const component = await promise;
      this.setState({
        isLoading: false,
        component,
      });
    } catch (e) {
      this.setState({
        errorMessage: e || "문제가 발생했습니다!",
      });
    }
  }

  render() {
    const { isLoading, component, errorMessage } = this.state;
    const LoadedComponent = isLoading
      ? () => <LoadingAnimation errorMessage={errorMessage} />
      : component;
    return <LoadedComponent />;
  }
}

const AsyncDefaultComponent = ({ loader }) => (
  <AsyncComponent
    loader={async () => {
      const { default: component } = await loader;
      return component;
    }}
  />
);

export default AsyncComponent;
export { AsyncDefaultComponent };
