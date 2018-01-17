import React, { Component } from 'react';
import './App.css';
import DefeatScreen from './Scenarios/DefeatScreen';
import StartScreen from './Scenarios/StartScreen';

class App extends Component {

  render() {
    var sceneSelection = 0; 

    if(sceneSelection == 0){ // Starting Screen 
      return (
        <div className="App">
          <StartScreen/>
        </div>
      );
    }
    else if(sceneSelection == 1){ 
      return (
        <div className="App">
          <DefeatScreen/>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <DefeatScreen/>
        </div>
      );
    }
    
  }
}

export default App;
