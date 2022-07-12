import React, { Component } from "react";

export default class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldWeather: "Sunny",
      newWeather: "Rainy",
      pictures: [],
    };
  }

  componentDidMount() {
    console.log("inside componentDidMount method");
    //REST Call -> axios.get axios.put,axios.post,axios.delete
    fetch("https://randomuser.me/api/?results=10")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log("json data", data);
        var pictures = data.results.map((pic) => {
          return (
            <div key={Math.random()}>
              <img src={pic.picture.medium} alt="User" className="img-thumbnail"/>
            </div>
          );
        });
        this.setState({ pictures: pictures });
        console.log("state (pictures)", this.state.pictures);
      });
  }

  changeName() {
    this.setState({
      oldWeather: this.state.newWeather,
      newWeather: this.state.oldWeather,
    });
  }

  render() {
    console.log("inside render method");
    return (
      <div>
        <h1>Today Weather is : {this.state.oldWeather}</h1>
        <button onClick={(event) => this.changeName(event)}>
          Change weather to {this.state.newWeather}
        </button>
        <span>{this.state.pictures}</span>
      </div>
    );
  }
}
