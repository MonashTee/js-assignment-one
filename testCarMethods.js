const CarMethods = require('./CarMethodsClass');

// Create a new CarMethods instance
const myCar = new CarMethods(
    'Toyota', 'Toyota Motor Corporation', 'Red', 'Petrol', 4, 4, 5, 240, true, true, true, true,
    'Camry', 2020, 30000, false, false
);

console.log("Age of the car:", myCar.getAge());
console.log("Price of the car:", myCar.getPrice());
console.log(myCar.getSummary());
