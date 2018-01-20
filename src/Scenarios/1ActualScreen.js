import React, { Component } from 'react';
import './ScenarioStyling/ActualScreen.css';

export default class ActualScreen extends GenericScenario {
    render() {
        
        return (
            <div className="actualScreen">

            <body class="actualBody">

                <div class="actualCenterWrapper">

                <p><a href="#">BMD False Alarm</a></p>
                <p><a href="#">Amber Alert (CAE) - Kauai County Only &#13;&#10;</a></p>
                <p><a href="#">Amber Alert (CAE) Statewide</a></p>
                <p><a href="#">1. TEST Message</a></p>
                <p><a href="#" onClick={(e) => this.fail()}>PACOM (CDW) - STATE ONLY</a></p>
                <p><a href="#">Tsunami Warning (CEM) - STATE ONLY</a></p>
                <p><a href="#" onClick={(e) => this.continue()}>DRILL - PACOM (CDW) - STATE ONLY</a></p>
                <p><a href="#">Landslide - Hana Road Closure</a></p>
                <p><a href="#">Amber Alert DEMO TEST</a></p>
                <p><a href="#">High Surf Warning North Shores</a></p>
                
                </div>

            </body>

            </div>
        );
    }
}
