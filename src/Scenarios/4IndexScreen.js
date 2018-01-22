import React, { Component } from 'react';
import './ScenarioStyling/PasswordScreen.css';
import GenericScenario from './GenericScenario'

export default class IndexScreen extends GenericScenario {

    constructor(props) {
        super(props);
        this.state = {select:'0'};
		
		this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormChange(event) {
        this.setState({select: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if(this.state.select == 0){
			this.succeed();             
        }
        else{
			this.fail(); 
        }
    }

    render() {
        return (
            <div class="passwordScreen">

                <form onSubmit={this.handleSubmit}>

                    <div> 
                        <label>
                               1. Send Test Missile Alert
                               2. Send Actual Missile Alert
							   3. Send Puppies
                        </label>
                    </div>

                    <div class="passwordForm">
                        <label>
                            Input Selection Index:
                            <input type="text" value={this.state.select} onChange={this.handleFormChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>

                </form>

            </div> 
        );
    }
}
