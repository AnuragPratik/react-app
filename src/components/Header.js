import React, { Component } from "react";

//TBD - Container
export default class Header extends Component {
  state = { city: "Hyderabad" };
  render() {
    return (
      <div className="bg-warning text-dark text-center">
        <h1>
          React SPA Project - {this.props.company} @ {this.state.city}
        </h1>
      </div>
    );
  }
}

Header.defaultProps = {
  company: "MyCompany",
};
