//Task3 create a class called CarMethods that extends the Car class.
const Car = require('./carClass'); //Import the Car Class
class CarMethods extends Car {
    // Constructor to initialize the CarMethods class
    constructor(name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats,
                maxSpeed, isAutomatic, isInsured, isRegistered, isWorking, model, year, price, isUsed, isDamaged) {
        // Call the constructor of the Car class
        super(name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats,
              maxSpeed, isAutomatic, isInsured, isRegistered, isWorking, model, year, price, isUsed, isDamaged);
    }

    // Method to get the age of the car
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

    // Method to get the price of the car
    getPrice() {
        return this.price;
    }
    // Method to get a summary of the car
    getSummary() {
        return `Car Summary:
        Name: ${this.name}
        Manufacturer: ${this.manufacturer}
        Model: ${this.model}
        Year: ${this.year}
        Color: ${this.color}
        Fuel Type: ${this.fuelType}
        Number of Wheels: ${this.numberOfWheels}
        Number of Doors: ${this.numberOfDoors}
        Number of Seats: ${this.numberOfSeats}
        Max Speed: ${this.maxSpeed} km/h
        Automatic: ${this.isAutomatic ? 'Yes' : 'No'}
        Insured: ${this.isInsured ? 'Yes' : 'No'}
        Registered: ${this.isRegistered ? 'Yes' : 'No'}
        Working: ${this.isWorking ? 'Yes' : 'No'}
        Price: $${this.price}
        Used: ${this.isUsed ? 'Yes' : 'No'}
        Damaged: ${this.isDamaged ? 'Yes' : 'No'}`;
    }
}

// Export the CarMethods class
module.exports = CarMethods;
