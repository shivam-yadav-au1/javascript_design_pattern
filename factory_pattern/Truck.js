class Truck {
    constructor(state,wheelSize,color){
        this.state = state || 'used';
        this.wheelSize = wheelSize || 'large';
        this.color = color || 'blue';
    }

    props(){
        return ` I am a ${this.state} ${this.color} truck and I have a ${this.wheelSize}`;
    }
}

module.exports = Truck;