// Частина №1
//
// Створити скрипт яки повинен виконувати наступне:
//
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
//
//
//  При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
//
//  його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
//
//
//  Частина №2
//
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
//
//
//
// Все це має бути відображено в одному вікні (алерті).
//
//
//
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .
//



let birthYear = prompt("Введіть рік свого народження:");
let city = prompt("Введіть назву міста, в якому ви живете:");
let favoriteSport = prompt("Введіть свій улюблений вид спорту:");

// перевірка чи користувач натиснув "Скасувати" на одному з попередніх запитань
if (birthYear === null || city === null || favoriteSport === null) {
    alert("Шкода, що Ви не захотіли ввести свій(ю) " +
        (birthYear === null ? "рік народження" : "") +
        (city === null ? (birthYear === null ? " та " : "") + "назву міста" : "") +
        (favoriteSport === null ? (birthYear === null || city === null ? " та " : "") + "улюблений вид спорту" : "") + ".");
// Запит року народження, міста, улюбленний вид спорту
} else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - parseInt(birthYear);

    let message = "Ваш вік: " + age + " років\n";

    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        let country = "";
        switch (city) {
            case "Київ":
                country = "України";
                break;
            case "Вашингтон":
                country = "США";
                break;
            case "Лондон":
                country = "Великої Британії";
                break;
        }
        message += "Ти живеш у столиці " + country + ".";
    } else {
        message += "Ти живеш у місті " + city + ".";
    }

    let champions = {
        "футбол": "Кріштіану Роналду",
        "баскетбол": "Леброн Джеймс",
        "бодібілдінг": "Арнольд Шварценеггер"
    };
    let champion = champions[favoriteSport];
    if (champion !== undefined) {
        message += "\nКруто! Хочеш стати " + champion + "?";
    }

    alert(message);
}
