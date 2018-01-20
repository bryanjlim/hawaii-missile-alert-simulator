import React, { Component } from 'react';
import './App.css';
import ScenarioNumber from './Scenarios/ScenarioNumber'
import ScenarioController from './Scenarios/ScenarioController';

export default class App extends Component {
  constructor(){
    super();
    this.scenarioNumber = new ScenarioNumber(); 
  }
  render() {
    return (
      <div className="App">
        <ScenarioController scenarioNumber={this.scenarioNumber}/>
      </div>
    );
  }
}
