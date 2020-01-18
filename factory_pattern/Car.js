class Car{

    constructor(doors,state,color){
        this.doors = doors || 4;
        this.state = state || 'brand new';
        this.color = color || 'silver';
    }

    props(){
        return `I amd a ${this.state} ${this. color} car and I have ${this.doors} doors`;
    }
}

module.exports= Car;