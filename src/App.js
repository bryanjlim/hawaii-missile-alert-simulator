import React, { Component } from 'react';
import './App.css';
import ScenarioController from './Scenarios/ScenarioController';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ScenarioController/>
      </div>
    );
  }
}

export default App;
