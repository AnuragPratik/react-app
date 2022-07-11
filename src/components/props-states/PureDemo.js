import React, { Component } from "react";

//Impure componenet
export default class PureDemo extends Component {
  state = {
    title: "Titanic",
    isReleased: true,
  };
  toggleRelease = () => {
    console.log("toggleRelease clicked..");
    this.setState((prevState) => ({
      isReleased: !prevState.isReleased,
    }));
  };
  render() {
    const { title, isReleased } = this.state;
    return (
      <div className="bg-info">
        <MovieTitle title={title} />
        <h2>Is movie released? {isReleased ? "Yes" : "No"}</h2>
        <button className="btn-success" onClick={this.toggleRelease}>
          Toggle Release
        </button>
      </div>
    );
  }
}

// class MovieTitle extends React.Component {
class MovieTitle extends React.PureComponent {
  render() {
    console.log("MovieTitle component rendered");
    return <h1>Movie title: {this.props.title}</h1>;
  }
}
