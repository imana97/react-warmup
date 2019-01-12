import React, { Component } from "react";
import { render } from "react-dom";
import { TodoApp } from "./todo";

class App extends Component {
  render() {
    return (
      <div>
        <TodoApp />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
