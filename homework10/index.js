
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
for (let i = 10; i <= 20; i++) {
   document.write(i + ', ');
}

// Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    document.write(i*i + ' ');
}

// Вивести таблицю множення на 7.
for (let i = 1; i <= 10; i++) {
    document.write('7 * ' + i + ' = ' + 7*i + '<br>');
}

// Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
document.write('Сума чисел від 1 до 15: ' + sum);

// Знайти добуток усіх цілих чисел від 15 до 35.
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
document.write('Добуток чисел від 15 до 35: ' + product);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
let average = sum / 500;
document.write('Середнє арифметичне чисел від 1 до 500: ' + average);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
document.write('Сума парних чисел від 30 до 80: ' + sum);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        document.write(i + ' ');
    }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number = 36;
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        document.write(i + ' ');
    }
}

// Визначити кількість його парних дільників.
let number = 36;
let count = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        count++;
    }
}
document.write('Кількість парних дільників числа ' + number + ': ' + count);
