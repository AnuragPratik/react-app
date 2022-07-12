import React, { Component } from "react";

// 1. create the context with initial state
const EmpContext = React.createContext(); // useContxt()
// const AuthContext = React.createContext({ jwt: "", sessionId: "" });

// 2. create provider
class EmpProvider extends Component {
  state = {
    name: "Adam",
    salary: 50000,
    job: "SDE",
  };
  render() {
    return (
      <EmpContext.Provider
        value={{
          state: this.state,
          // handlers(CRUD)
          incrementSalary: () =>
            this.setState({
              salary: this.state.salary + 10000,
            }),
        }}
      >
        {this.props.children}
      </EmpContext.Provider>
    );
  }
}

// 3. wrap provider in main component to access the context (subscriber)
export default class ContextDemo extends Component {
  render() {
    return (
      <EmpProvider>
        <div className="bg-warning">
          <h2 className="bg-success">React Context API Demo</h2>
          {/* <EMP />
          <Contractor />
          <HEMP />
          <Bank /> */}
          <Family />
        </div>
      </EmpProvider>
    );
  }
}

const Family = () => {
  return (
    <div>
      <Person />
      {/* <Emp /> */}
    </div>
  );
};

class Person extends Component {
  render() {
    return (
      <EmpContext.Consumer>
        {(context) => (
          <div className="bg-info">
            <h3 className="text-danger">Person Details</h3>
            <h3>Hi! {context.state.name}</h3>
            <h4>Salary : {context.state.salary}</h4>
            <h4>Job : {context.state.job}</h4>
            <button
              className="btn btn-primary"
              onClick={context.incrementSalary}
            >
              Increment Salary
            </button>
          </div>
        )}
      </EmpContext.Consumer>
    );
  }
}
