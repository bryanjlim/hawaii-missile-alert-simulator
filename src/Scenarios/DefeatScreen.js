import React, { Component } from 'react';
import './ScenarioStyling/DefeatScreen.css';

export default class DefeatScreen extends Component {

  onButtonPress(){
    this.props.scenarioNumber.setValue(0); // Go back to start #0
  }

  render() {
    var loseCount = this.props.scenarioNumber.getLoseCount(); 

    var timeOrTimes = (loseCount === 1) ? "time" : "times"; 

    return (
      <div className="defeatScreen">

        <body class="defeatBody">
          <h1 class="defeatTitle">SENDING REAL MISSILE ALERT...</h1>
        </body>
        <div>
        <div class="defeatBottomLeft">
          <div class="defeatFooter">(You lose)</div>
          <div class="loseCount"><i>You have lost {loseCount} {timeOrTimes} &#13;&#10;</i></div>
        </div>

        <div class="defeatBottomRight">
          <button class="defeatButton" onClick={(e) => this.onButtonPress()}>
              Restart
          </button>
        </div>
        </div>
      </div>
    );
  }
}
