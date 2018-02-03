import React, { Component } from 'react';
import './ScenarioStyling/VictoryScreen.css';

export default class VictoryScreen extends Component {

  render() {
    var loseCount = this.props.scenarioNumber.getLoseCount(); 

    var timeOrTimes = (loseCount + 1 === 1) ? "try" : "tries"; 

    return (
      <div className="victoryScreen">
        <body class="victoryBody">
          <h1 class="victoryTitle">SENDING TEST MISSILE ALERT...</h1>
        </body>
        <div>
          <div class="victoryBottom">
            <div class="victoryFooter">(You win)</div>
            <div class="tryCount"><i>It took you {loseCount + 1} {timeOrTimes} &#13;&#10;</i></div>
          </div>
        </div>
      </div>
    );
  }
}
