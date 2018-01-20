import React, { Component } from 'react';
import './ScenarioStyling/PasswordScreen.css';
import GenericScenario from './GenericScenario'

export default class PasswordScreen extends GenericScenario {

    constructor(props) {
        super(props);
        this.state = {password: '', select:'actual'};

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelectChange(event) {
        this.setState({select: event.target.value});
    }

    handleFormChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(!this.state.password == 'password123'){
            alert("Incorrect Password (hint: password123");
        }
        else{
            if(this.state.select == 'actual'){
                alert("You have selected to send the actual missile alert.")
                this.fail(); 
            }
            else{
                alert("You have selected to send the test missile alert.")
                this.succeed(); 
            }
        }
        this.state.select = 'actual';
    }

    render() {
        return (
            <div class="passwordScreen">

                <form onSubmit={this.handleSubmit}>

                    <div class ="passwordSelect"> 
                        <label>
                            Select Alert:
                            <select ref="sel" value={this.state.select} onChange={this.handleSelectChange}>
                                <option value="actual">Send Actual Missile Alert</option>
                                <option value="test">Send Test Missile Alert</option>
                            </select>
                        </label>
                    </div>

                    <div class="passwordForm">
                        <label>
                            Input Password:
                            <input type="text" value={this.state.password} onChange={this.handleFormChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>

                </form>

            </div> 
        );
    }
}
