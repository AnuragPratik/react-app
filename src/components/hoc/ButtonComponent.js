import React, { Component } from "react";
import withIncrement from "./withIncrement";

class ButtonComponent extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button className="btn btn-success" onClick={increment}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withIncrement(ButtonComponent);
