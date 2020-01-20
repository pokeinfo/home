import React, { Component } from 'react';

const LoadingAnimation = () => <div>loading...</div>;

class AsyncComponent extends Component {
  state = {
    isLoading: true,
  };

  constructor(props) {
    super(props);
    const { loader } = props;
    this.loader = loader;
  }

  async componentDidMount() {
    const { loader } = this;
    const component = await loader();
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
