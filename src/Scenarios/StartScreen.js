import React, { Component } from 'react';
import './ScenarioStyling/StartScreen.css';

export default class StartScreen extends Component {

  onButtonPress(){
    this.props.scenarioNumber.setValue(1); // Next Scenario is #1
  }

  render() {
    return (
      <div className="startScreen">

        <body class="startBody">

          <div class="startCenterWrapper">

            <h1 class="startTitle">Hawaii Missile Alert Simulator</h1>

            <div class = "startTextWrapper">

              <p class="startText">A simulator for the operation of the Hawaii Missile Alert System interface... With some additional tweaks for empahsis. </p>
              <p class="startText"><strong>Why? </strong><a href="https://www.yahoo.com/news/hawaii-apos-missile-alert-gaffe-142408797.html">Because important government interfaces shouldn't be allowed to fail us.</a> User interface should serve users, not hinder them.</p>
            
            </div>

            <button class="startButton" onClick={(e) => this.onButtonPress()}>
              Begin Simulation
            </button>

          </div>

        </body>

      </div>
    );
  }
}
