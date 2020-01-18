var Car = require('./Car');
var Truck = require('./Truck');

class VehicleFactory{

    constructor(options){
        let vehicle;
        switch(options.type){
            case 'car':
            vehicle = new Car(options.doors,options.state,options.color);
            case 'truck':
            vehicle = new Truck(options.doors,options.state,options.color);
            break;
        }
        return vehicle;
    }
}

module.exports= VehicleFactory;
