import React, { Component } from 'react';
import StartScreen from './StartScreen';
import ActualScreen from './1ActualScreen';
import DefeatScreen from './DefeatScreen';
import PasswordScreen from './2PasswordScreen';
import GenericScenario from './GenericScenario'
import ScenarioNumber from './ScenarioNumber';
import IndexScreen from './3IndexScreen';
export default class ScenarioController extends Component {

  constructor(){
    super();
	this.scenarios = [<StartScreen />,  <ActualScreen />, <PasswordScreen />, <IndexScreen />];
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 20);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let sceneSelection = this.props.scenarioNumber.getValue(); 	
    if (sceneSelection === -1){
      return (
        <div className="App">
          <DefeatScreen scenarioNumber={this.props.scenarioNumber}/>
        </div>
      );
    } else if(sceneSelection >= this.scenarios.length){
		this.props.scenarioNumber.setValue(0);
		sceneSelection = this.props.scenarioNumber.getValue();
	}
	var props = {scenarioNumber: this.props.scenarioNumber};
		var scenarioSelect = React.cloneElement(this.scenarios[sceneSelection], props);
      return (  
		<div className="App">	  
		{scenarioSelect}
		</div>
      );


    
  }
}
