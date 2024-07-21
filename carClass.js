//Task2 create a class called Car that extends the Vehicle class.
const Vehicle = require('./vehicleClass'); //Import te Vehicle class
class Car extends Vehicle {
    constructor(name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats,
        maxSpeed, isAutomatic, isInsured, isRegistered, isWorking, model, year, price, isUsed, isDamaged ) 
        //call the constructor of the Vehicle class
        {
             super (name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats,
                maxSpeed, isAutomatic, isInsured, isRegistered, isWorking);

        //Initialize additional properties of the Car class
        
        this.model = model;
        this,year = year;
        this.price = price;
        this.isUsed = isUsed;
        this.isDamaged = isDamaged}
    }
    // Export the Car class
    module.exports = Car;
