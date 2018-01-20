import React, { Component } from 'react';
import StartScreen from './StartScreen';
import ActualScreen from './1ActualScreen';
import DefeatScreen from './DefeatScreen';
import PasswordScreen from './2PasswordScreen';
import GenericScenario from './GenericScenario'
import ScenarioNumber from './ScenarioNumber';

export default class ScenarioController extends Component {

  constructor(){
    super();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let sceneSelection = this.props.scenarioNumber.getValue(); 

    if(sceneSelection === 0){ // Starting Screen 
      return (
        <div className="App">
          <StartScreen scenarioNumber={this.props.scenarioNumber}/>
        </div>
      );
    }
    else if(sceneSelection === 1){ 
      return (
        <div className="App">
          <ActualScreen scenarioNumber={this.props.scenarioNumber}/>
        </div>
      );
    }
    else if(sceneSelection === 2){ 
      return (
        <div className="App">
          <PasswordScreen scenarioNumber={this.props.scenarioNumber}/>
        </div>
      );
    }
    else if (sceneSelection === -1){
      return (
        <div className="App">
          <DefeatScreen scenarioNumber={this.props.scenarioNumber}/>
        </div>
      );
    }
    else{
      return(
        <div className="App">
          <StartScreen scenarioNumber={this.scenarioNumber}/>
        </div>
      );
    }
    
  }
}
