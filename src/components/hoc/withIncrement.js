import React from "react";

const withIncrement = (OriginalComponent) => {
  class updateComponent extends React.Component {
    // fetch api, load themes, stock market with web socket (live data)
    state = { count: 0 };
    componentDidMount() {}
    increment = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increment={this.increment}
        />
      );
    }
  }
  return updateComponent;
};

export default withIncrement;
