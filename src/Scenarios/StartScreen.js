import React, { Component } from 'react';
import './ScenarioStyling/StartScreen.css';
import ScenarioController from './ScenarioController'

export default class StartScreen extends Component {

  onButtonPress(){
    this.props.scenarioNumber.increment();
  }

  render() {
    return (
      <div className="startScreen">
        <body>
          <h1 class="startTitle">Hawaii Missile Alert Simulator</h1>
          <p class="startText">A simulator for ther operation of the Hawaii Missile Alert System interface... With some additional tweaks for empahsis. </p>
          <p class="startText"><strong>Why? </strong><a href="https://www.yahoo.com/news/hawaii-apos-missile-alert-gaffe-142408797.html">Because important government interfaces shouldn't be allowed to fail us.</a>  We can't let important systems like this have such high room for machine-caused human error.</p>
          
          <button onClick={(e) => this.onButtonPress()}>
            Begin Simulation
          </button>

        </body>
      </div>
    );
  }
}
