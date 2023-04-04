// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const  arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sumPositives = 0;
let numPositives = 0;
for (let i = 0; i <arr.length; i++) {
    if (arr[i] > 0) {
        sumPositives += arr[i];
        numPositives++;
    }
}
console.log( "Sum of positives:",sumPositives);
console.log( "Number of positives:",numPositives);

// Знайти мінімальний елемент масиву та його порядковий номер.

let min = arr[0];
let  minIndex = 0;
for (let i = 1; i <arr.length; i++) {
    if (arr[i] <min) {
        min = arr[i];
        minIndex = i;
    }
}
console.log("Minimal element", min);
console.log("Index of minimal element",minIndex);

// Знайти максимальний елемент масиву та його порядковий номер.

let  max = arr[0];
let  maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}
console.log("Maximum element", max);
console.log(" Index of maximum element", maxIndex);

// Визначити кількість негативних елементів.

let negativeElement = 0;
for (let i = 0; i <arr.length; i++) {
    if (arr[i] <0) {
        negativeElement++;
    }
}
console.log("Negative elements", negativeElement);

// Знайти кількість непарних позитивних елементів.

let positiveElement = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i] %2 !==0){
        positiveElement++;
    }
}
console.log("Number of odd positives:", positiveElement);

// Знайти кількість парних позитивних елементів.

let positiveElement = 0;
let sumElement = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] %2 ===0) {
        positiveElement++;
        sumElement += arr[i];
    }
}
console.log("Number of odd positives:", positiveElement);
console.log("Sum of odd positives:", sumElement);

// Знайти суму непарних позитивних елементів.

let countOddPositives = 0;
let sumOddPositives = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        countOddPositives++;
        sumOddPositives += arr[i];
    }
}
console.log("Number of odd positives:", countOddPositives);
console.log("Sum of odd positives:", sumOddPositives);



// Знайти добуток позитивних елементів.
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let product = 1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        product *= arr[i];
    }
}
console.log("Product of positives:", product);

// Знайти найбільший серед елементів масиву, ост альні обнулити.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let max = arr[0];
let maxIndex = 0;

// Знаходимо найбільший елемент та його індекс
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

// Обнуляємо всі інші елементи
for (let i = 0; i < arr.length; i++) {
    if (i !== maxIndex) {
        arr[i] = 0;
    }
}

console.log("Max element:", max);
console.log("Result array:", arr);
