import React, { Component } from "react";
import TextDisplay from "./TextDisplay";

export default class TextInput extends Component {
  state = {
    inputText: "Adam",
  };
  handleOnChangeEvent = (event) => {
    this.setState({ inputText: event.target.value });
  };
  render() {
    return (
      <div className="container bg-info">
        Company: <input type="text" id="txt1" />
        <br />
        Data: <input type="text" value="Learning React" />
        <br />
        UserName:
        <input
          type="text"
          value={this.state.inputText}
          onChange={(event) => this.handleOnChangeEvent(event)}
        />
        {this.state.inputText ? console.log("valid") : console.log("invalid")}
        {this.state.inputText ? (
          <TextDisplay text={this.state.inputText} />
        ) : (
          <TextDisplay text="Guest" />
        )}
      </div>
    );
  }
}
