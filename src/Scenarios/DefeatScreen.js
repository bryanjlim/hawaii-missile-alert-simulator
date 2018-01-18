import React, { Component } from 'react';
import './ScenarioStyling/DefeatScreen.css';

export default class DefeatScreen extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="defeatScreen">
        <body>
          <h1>SENDING REAL MISSILE ALERT</h1>
        </body>
      </div>
    );
  }
}
