
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const exchangeRate = 27;

for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} доларів коштують ${i * exchangeRate} гривень`);
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const num = 17;
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(`Число ${num} ${isPrime ? 'просте' : 'не просте'}`);

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const num = 81;
let isPowerOfThree = false;
if (num === 1) {
    isPowerOfThree = true;
} else {
    let n = num;
    while (n > 1) {
        if (n % 3 === 0) {
            n /= 3;
        } else {
            break;
        }
    }
    if (n === 1) {
        isPowerOfThree = true;
    }
}
console.log(`Число ${num} ${isPowerOfThree ? 'є' : 'не є'} ступенем числа 3`);

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const n = 100;

for (let i = 1; i <= 100; i++) {
    if (i * i >= n) {
        console.log(i);
    } else {
        break;
    }
}



