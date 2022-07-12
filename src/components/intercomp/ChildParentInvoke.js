import React, { Component } from "react";

export default class ChildParentInvoke extends Component {
  state = { data: "Initial Data" };
  updateState = (event) => {
    this.setState({ data: event.target.value });
  };
  //   addCart(), removeCart(), editCart()
  render() {
    return (
      <div>
        <h2 className="text-success">Parent Component</h2>
        <h3>{this.state.data}</h3>
        <br />
        <h2 className="text-danger">Child Component</h2>
        <Content
          dataProp={this.state.data}
          updateStateProp={this.updateState}
        ></Content>
        <ContentSibling dataProp={this.state.data}></ContentSibling>
      </div>
    );
  }
}

const Content = (props) => {
  return (
    <div>
      Data:
      <input
        type="text"
        value={props.dataProp}
        onChange={props.updateStateProp}
      />
    </div>
  );
};

const ContentSibling = (props) => {
  return (
    <div className="bg-primary text-warning">
      <h3>{props.dataProp}</h3>
    </div>
  );
};
