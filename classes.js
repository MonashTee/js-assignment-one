class Car{
    constructor(brand, year){
        this.name = brand;
        this.year = year;
    }
}

const honda18 = new Car('Civic', 2018);
const honda24 = new Car('Civic', 2024)
console.log(honda24)


class Professor {
    name = "Tehillah Ojo"
    teaches = "Javascript";

    grade(paper){
        return 'A+'
    }

    introduceSelf() {
        return`Hello, My name is Professor ${this.name}and I will be your ${this.teaches}professor.`;
    }
}
const test = new Professor()
console.log(test.grade('math'))