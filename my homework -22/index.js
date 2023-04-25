class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        if (owner instanceof Person) {
            if (owner.age >= 18) {
                this.owner = owner;
            } else {
                console.log("Власник повинен бути не молодше 18 років!");
            }
        } else {
            console.log("Невірний власник, будь ласка, надайте екземпляр класу Person.");
        }
    }

    getInfo() {
        let ownerInfo = "Невідомий власник";
        if (this.owner instanceof Person) {
            ownerInfo = this.owner.getInfo();
        }
        return `${this.brand} ${this.model} (${this.year}) з номерним знаком ${this.licensePlate}. ${ownerInfo}.`;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `${this.name} (${this.age} років)`;
    }
}

// Створити кілька екземплярів класу Person
const john = new Person("John", 30);
const jane = new Person("Jane", 25);
const mark = new Person("Mark", 16);

// Створити кілька екземплярів класу Car та присвоїти власників
const car1 = new Car("Toyota", "Corolla", 2010, "ABC-123", john);
const car2 = new Car("Honda", "Civic", 2015, "DEF-456", jane);
const car3 = new Car("Ford", "Mustang", 2020, "GHI-789", mark);

// Вивести інформацію про автомобілі
console.log(car1.getInfo());
console.log(car2.getInfo());
console.log(car3.getInfo());
