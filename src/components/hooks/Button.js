// import React, { Component } from "react";

// export default class Button extends Component {
//   state = {
//     buttonText: "Click me!",
//   };
//   handleClick = () => {
//     this.setState({ buttonText: "Clicked! (Component)" });
//   };
//   render() {
//     const { buttonText } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </div>
//     );
//   }
// }

import { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Click me!");
  // const [users, setUsers] = useState([]);
  function handleClick() {
    // fetchAPI
    return setButtonText("Clicked! (Hook)");
  }

  return (
    <button onClick={handleClick} className="btn btn-info">
      {buttonText}
    </button>
  );
}
