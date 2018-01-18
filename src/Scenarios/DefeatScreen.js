import React, { Component } from 'react';
import './ScenarioStyling/DefeatScreen.css';

export default class DefeatScreen extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="defeatScreen">
        <body class="defeatBody">
          <h1 class="defeatTitle">SENDING REAL MISSILE ALERT...</h1>
        </body>
        <footer class="defeatFooter">(You lose)</footer>
      </div>
    );
  }
}
