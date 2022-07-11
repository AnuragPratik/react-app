import React, { Component } from "react";

export default class StatefulApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Adam",
          balance: 10000,
        },
        {
          id: 2,
          name: "Brock",
          balance: 20000,
        },
        {
          id: 3,
          name: "Chris",
          balance: 30000,
        },
      ],
    };
  }
  render() {
    return (
      // <React.Fragment>
      //   <h3 className="bg-danger">Account holder details</h3>
      // </React.Fragment>
      <>
        <h3 className="bg-danger">Account holder details</h3>
        <table className="table table-hover table-striped">
          <tbody>
            {this.state.data.map((person, index) => (
              <TableRow key={index} dataProps={person} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

//Presentation
const TableRow = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.dataProps.id}</td>
      <td>{props.dataProps.name}</td>
      <td>{props.dataProps.balance}</td>
    </tr>
  );
};
