import React, { Component } from "react";
import Star from "./Star";
import Rating from "./Rating";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Star Components:</h2>
        <Star color="pink" isFilled />
        <Star color="magenta" />
        <Star color="indigo" isFilled />
        <h2>Rating Component (uses Stars):</h2>
        <Rating stars={4} />
      </div>
    );
  }
}

export default App;