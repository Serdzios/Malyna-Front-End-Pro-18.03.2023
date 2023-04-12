// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calculateAverage(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];
const avg = calculateAverage(arr);
console.log(avg);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function dothMath(x,znak,y) {
let  result;
switch (znak) {
    case '+':
        result = x + y;
        break;
    case '-':
        result = x - y;
        break;
    case '*':
        result = x * y;
        break;
    case '/':
        result = x / y;
        break;
    case '%':
        result = x % y;
        break;
    case '^':
        result = Math.pow(x,y);
        break;
    default:
return 'Неправильний знак дії';
}
return  result;
}

const x = 20;
const  y = 30;
const znak = '*';

const result = dothMath(x,znak,y);
console.log(result);

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function fillArray(rows, cols) {
    const arr = [];

    for (let i = 0; i < rows; i++) {
        arr[i] = [];

        for (let j = 0; j < cols; j++) {
            const value = prompt(`Введіть значення елемента [${i}][${j}]`);

            // перетворюємо введене значення в числовий тип
            arr[i][j] = +value;
        }
    }

    return arr;
}

const rows = prompt('Введіть кількість рядків:');
const cols = prompt('Введіть кількість стовпців:');

const arr = fillArray(rows,cols);
console.log(arr);

// Приклад
//
//     Введіть кількість рядків: 3
// Введіть кількість стовпців: 2
// Введіть значення елемента [0][0]: 1
// Введіть значення елемента [0][1]: 2
// Введіть значення елемента [1][0]: 3
// Введіть значення елемента [1][1]: 4
// Введіть значення елемента [2][0]: 5
// Введіть значення елемента [2][1]: 6
//
// Результат виводу у консолі:
//     [[1, 2], [3, 4], [5, 6]]

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeChars(str, chars) {
    const arr = str.split('');
    const filteredArr = arr.filter((char) => !chars.includes(char));
    const result = filteredArr.join('');
    return result;
}

const str = prompt('Введіть рядок:');
const chars = prompt('Введіть символи, які треба видалити (без пробілів):').split('');

const result = removeChars(str, chars);
console.log(result); //якщо ввести рядок "hello world" і символи "ld", то отримаємо результат "heo wor"

