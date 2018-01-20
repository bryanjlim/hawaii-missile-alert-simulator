import React, { Component } from 'react';
import './ScenarioStyling/StartScreen.css';

export default class GenericScenario extends Component {  
    fail(){
        this.props.scenarioNumber.setValue(-1); // Fail Scenario is #-1
    }

    succeed(){
        this.props.scenarioNumber.setValue(this.props.scenarioNumber.getValue() + 1); // Next Scenario is #2
    }
}
