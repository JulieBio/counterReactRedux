import React, { Component } from 'react';
import CounterContainer from "./containers/CounterContainer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>Give me a number !</p>
      <CounterContainer/>
      </div>
    );
  }
}

export default App;
