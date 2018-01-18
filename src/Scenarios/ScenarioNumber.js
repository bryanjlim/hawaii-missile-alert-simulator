export default class ScenarioNumber {

    constructor() {
        this.value = 0; 
        this.loseCount = 0; 
    }

    setValue(number) {
        this.value=number; 
        if(number === -1){
            this.loseCount++; 
        }
    }

    getValue(){
        return this.value; 
    }

    getLoseCount(){
        return this.loseCount; 
    }

}