import React, { Component } from "react";
import withIncrement from "./withIncrement";

class HoverComponent extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h2 onMouseOver={increment}>Hovered {count} times :)</h2>
      </div>
    );
  }
}

export default withIncrement(HoverComponent);
