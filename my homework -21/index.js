class Person {
    constructor(name,gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }
    addResident(person) {
        this.residents.push(person);
    }
}

// Створюємо кілька екземплярів класу Person
const person1 = new Person('John', 'male');
const person2 = new Person('Jane', 'female');
const person3 = new Person('Bob', 'male');



// Створюємо кілька екземплярів класу Apartment
const apartment1 = new Apartment();
const apartment2 = new Apartment();

// Додаємо екземпляри класу Person до екземплярів класу Apartment
apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);

console.log(apartment1);
console.log(apartment2);





class House {
    constructor(maxApartments) {
        this.apartment = [];
        this.maxApartments = maxApartments;
    }
    addApartment(apartment) {
        if (this.apartment.length < this.maxApartments) {
            this.apartment.push(apartment);}
            else {
            console.log("Максимальна кількість квартир досягнута");
        }
    }
}

// Створюємо екземпляр класу Будинок
const house = new House(2);
console.log(house);
// Додаємо екземпляри класу Квартира до екземплярів класу Будинок
house.addApartment(apartment1);
house.addApartment(apartment2); // цей додаватиметься успішно
house.addApartment(new Apartment()); // виведе повідомлення про досягнення максимальної кількості квартир досягнута