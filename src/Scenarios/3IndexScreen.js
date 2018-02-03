import React, { Component } from 'react';
import './ScenarioStyling/PasswordScreen.css';
import GenericScenario from './GenericScenario'

export default class IndexScreen extends GenericScenario {

    constructor(props) {
        super(props);
        this.state = {select:'0'};
		this.action = "";
		this.puppyCounter = 0;
		this.puppies = "";
		this.puppyAnswerIndex = 0;
		this.puppySubmits = 0;
		this.puppyAdd = 1;
		this.puppyAnswers = [
			"",
			"Puppies for everyone! Children everywhere celebrate!",
			"Releasing pitbulls...",			
			"WARNING: puppy supply low!",
			"Hawaiians around the state are pleased with your benevolent rule.",
			"Stealing puppies from rich children to redistribute puppy supply...",
			"Receiving new puppy relief shipment from Petco...",
			"Stealing puppies from poor children to redistribute puppy supply...", 		
			"Accelerating puppy breeding rate...",
			"Hawaiian homes ransacked by puppy opposition members!",
			"Hawaiian economy slows to halt due after chaos of 'Bring Your Puppies to Work Day.'",
			"Republic of Puppya officially added as a member of the UN Security Council.",
			"Bark Ruffington of the Republic of Puppya uses Security Council powers to silence opposition to $300B relief package for Hawaiian puppy relief.",
			"Puppies officially considered apex predators by the HSCA.",
			"Republic of Puppya invades Poland.",
			"Republic of Puppya officially unites all countries under one global flag.",
			"Diplomats from Jupiter strike deals with Bark Ruffington IV.",
			"All planets in the star system send four representatives to form the Galactic Senate headed by Bark Ruffington VII.",
			"Bark Ruffington VII uses emergency powers to immediately detain all Martian rebels.",
			"New star system F611 found to harbor intelligent life.",
			"Bark Ruffington IX harnesses new galactic military state to eradicate F611 for imperial glory.",
			"Bark Ruffington XIV beheaded by revolutionaries!",
			"Radical puppy sect wipes out human reservations.",
			"You are the last human in the known universe.",
			"...",
			"Your automatic clicking program has successfully completed!"
			];
		
		this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormChange(event) {
        this.setState({select: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        switch(this.state.select){
			case "0":
				this.succeed();
				break;
			case "1":
				this.fail(); 
				break;
			case "2":
				this.puppyCounter += Math.ceil(this.puppyAdd * (0.9 + Math.random() * 0.25));
				this.puppySubmits++;
				this.action = "Sent " + this.puppyCounter + " puppies!";	
				this.puppyAction();
				break;
			default:
				this.action = "Invalid action!";
				break;
		}
		
    }
	
	puppyAction(){
		switch(this.puppySubmits){
			case 15:
				this.puppyAnswerIndex++;
				break;
			case 45:
				this.puppyAnswerIndex++;
				break;
			case 80:
				this.puppyAnswerIndex++;
				break;
			case 100:
				this.puppyAnswerIndex++;
				break;
			case 140:
				this.puppyAdd = 2;
				this.puppyAnswerIndex++;
				break;
			case 200:
				this.puppyAnswerIndex++;
				break;
			case 250:
				this.puppyAnswerIndex++;
				break;
			case 350:
				this.puppyAdd = 4;
				this.puppyAnswerIndex++;
				break;
			case 400:
				this.puppyAnswerIndex++;
				break;
			case 500:
				this.puppyAnswerIndex++;
				this.puppyAdd = 8;
				break;
			case 600:
				this.puppyAnswerIndex++;
				this.puppyAdd = 100;
				break;
			case 650:
				this.puppyAnswerIndex++;
				this.puppyAdd = 200;
				break;
			case 700:
				this.puppyAnswerIndex++;
				this.puppyAdd = 1000;
				break;
			case 800:
				this.puppyAnswerIndex++;
				break;
			case 850:
				this.puppyAnswerIndex++;
				this.puppyAdd = 10000;
				break;
			case 900:
				this.puppyAnswerIndex++;
				this.puppyAdd = 50000;
				break;
			case 1000:
				this.puppyAnswerIndex++;
				this.puppyAdd = 100000;
				break;
			case 1050:
				this.puppyAnswerIndex++;
				this.puppyAdd = 200000;
				break;
			case 1100:
				this.puppyAnswerIndex++;
				this.puppyAdd = 400000;
				break;
			case 1150:
				this.puppyAnswerIndex++;
				this.puppyAdd = 1000000;
				break;
			case 1200:
				this.puppyAnswerIndex++;
				break;
			case 1250:
				this.puppyAnswerIndex++;
				break;
			case 1300:
				this.puppyAnswerIndex++;
				break;
			case 1350:
				this.puppyAnswerIndex++;
				break;
			case 5000:
				this.puppyAnswerIndex++;
				break;
		}
		
		if(this.puppyAnswerIndex >=  this.puppyAnswers.length){
			this.puppyAnswerIndex = this.puppyAnswers.length - 1;
		}
		
		this.puppies = this.puppyAnswers[this.puppyAnswerIndex];
	}

    render() {
        return (
            <div class="passwordScreen">

                <form onSubmit={this.handleSubmit}>
					<div class="actualCenterWrapper">
						<div> 
							<p> &#123; 1. Send Test Missile Alert, </p>
							<p>	2. Send Actual Missile Alert, </p>
							<p>	3. Send Puppies &#125;</p>							
						</div>
					</div>
                    <div class="passwordForm">
                        <label>
                            Input Selection Index:
                            <input id="inputIndex" type="text" value={this.state.select} onChange={this.handleFormChange} />
                        </label>
                        <input type="submit" value="Submit" />
						<p> {this.action} </p>
						<p> {this.puppies} </p>
                    </div>

                </form>

            </div> 
        );
    }
}
