// Створити скрипт який повинен виконувати наступне:
//
//     питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

const operation = prompt("Що ви хочете зробити? (add, sub, mult, div)");
const num1 = Number(prompt("Введіть перше число:"));
const num2 = Number(prompt("Введіть друге число:"));

if (operation === "add") {
    alert(`${num1} + ${num2} = ${num1 + num2}`);
} else if (operation === "sub") {
    alert(`${num1} - ${num2} = ${num1 - num2}`);
} else if (operation === "mult") {
    alert(`${num1} * ${num2} = ${num1 * num2}`);
} else if (operation === "div") {
    alert(`${num1} / ${num2} = ${num1 / num2}`);
} else {
    alert("Недійсна операція! Треба вписати одне із запропонованих значень: add, sub, mult, div");
}
