import React, { Component } from "react";
import NewRepetitionConnected from "./new-repetition/NewRepetition";
import NewSetConnected from "./new-set/NewSet";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Whalreps</h1>
        </header>
        <NewSetConnected />
        <NewRepetitionConnected />
      </div>
    );
  }
}

export default App;
