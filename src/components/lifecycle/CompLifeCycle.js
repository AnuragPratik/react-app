import React, { Component } from "react";

export default class CompLifeCycle extends Component {
  state = { data: 0, msg: "Learning Lifecycle" };
  updateState(e) {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <h2 className="bg-warning">Parent Component</h2>
        <button onClick={(e) => this.updateState(e)}>Increment</button>
        <Child dataProp={this.state.data} />
      </div>
    );
  }
}

//Child Component
class Child extends Component {
  // 1. initialization
  constructor(props) {
    super(props);
    this.state = { name: "Adam" };
    console.log(
      `In constructor of child: ${props.dataProp} - ${this.state.name}`
    ); //0
  }

  // 2. render
  render() {
    return (
      <div className="container bg-info">
        Counter: <h3 id="txt1">{this.props.dataProp}</h3>
        State: <h3>{this.state.name}</h3>
      </div>
    );
  }

  // 3. componentDidMount
  componentDidMount() {
    console.log(`Child component mounted (props): ${this.props.dataProp}`);
    console.log(`Child component mounted (state): ${this.state.name}`);
    // called only once
    // initialize data or state by fetching from API (AJAX) /url+queryString
    // subscribe to observables, websocket
  }

  // 4. getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    // called everytime when props/state changes url/props.dataProp
    // fetch(url).then(resp=>this.setState(resp))
    // validation
    console.log(
      `In getDerivedStateFromProps: ${props.dataProp} - ${state.name}`
    );
    return { name: "Brock", address: "Hyderabad" };
  }

  // 5. shouldComponentUpdate
  shouldComponentUpdate(props, state) {
    // called everytime when state/props changes
    // decide whether to render or not based on condition by returning true/false
    console.log(
      `In shouldComponentUpdate: ${props.dataProp} - ${state.name} - ${state.address}`
    );
    return props.dataProp % 2 === 0; // update only on even counters, some business logic
  }
}
