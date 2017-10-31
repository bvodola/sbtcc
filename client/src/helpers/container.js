import React from 'react';

function container(func, WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      if(typeof func === 'function') {
        this.state = func();
      } else {
        this.state = {}
      }

    }
    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
}

export default container;
