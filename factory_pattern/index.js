var VehicleFactory = require('./VehicleFactory');

let options1 = {
    type:'car',
    color:'yellow',
    doors:6
}

let options2 ={
    type:'truck',
    state:'like new',
    color:'red',
    wheelSize:'small'
}

let car = new VehicleFactory(options1);
let truck = new VehicleFactory(options2);

console.log(car);
console.log(truck);