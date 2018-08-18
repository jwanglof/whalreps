import React, { Component } from "react";
import NewSetConnected from "./new-repetition/NewRepetition";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Whalreps</h1>
        </header>
        <NewSetConnected />
      </div>
    );
  }
}

export default App;
