class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_LARGE = { price: 100, calories: 40 };
    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };
    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_SPICE = { price: 15, calories: 0 };
    static MAX_TOPPINGS = 3;

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        if (this.toppings.length < Hamburger.MAX_TOPPINGS) {
            this.toppings.push(topping);
        } else {
            console.log("Error: Maximum toppings reached");
        }
    }

    calculatePrice() {
        let price = this.size.price + this.stuffing.price;
        for (let topping of this.toppings) {
            price += topping.price;
        }
        return price;
    }

    calculateCalories() {
        let calories = this.size.calories + this.stuffing.calories;
        for (let topping of this.toppings) {
            calories += topping.calories;
        }
        return calories;
    }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());

// Виводе таке значення:
//     Calories: 45
//  Price: 80
//  Price with sauce: 95


