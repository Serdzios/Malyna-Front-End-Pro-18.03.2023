
// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
const str1 = prompt("Введіть перший рядок: ");
const str2 = prompt("Введіть другий рядок: ");
const str3 = prompt("Введіть третій рядок: ");
const result = str1 + str3 + str2;
alert(result);



// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

const num = [12345];
const digits = num.toString().split('');
console.log(digits.join(' '));