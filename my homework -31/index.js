const form = document.querySelector('#registration-form');
const table = document.createElement('table');
const tbody = document.createElement('tbody');
const tableHeaders = ['Ім\'я', 'Прізвище', 'Дата народження', 'Стать', 'Місто', 'Адреса', 'Мови, якими володіє'];


const thead = document.createElement('thead');
const tr = document.createElement('tr');
for (let i = 0; i < tableHeaders.length; i++) {
    const th = document.createElement('th');
    th.innerText = tableHeaders[i];
    tr.appendChild(th);
}
thead.appendChild(tr);
table.appendChild(thead);

form.addEventListener('submit', (event) => {
    event.preventDefault();


    const tr = document.createElement('tr');

    const firstName = document.querySelector('input[name="first-name"]').value;
    const lastName = document.querySelector('input[name="last-name"]').value;
    const dob = document.querySelector('input[name="dob"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.querySelector('select[name="city"]').value;
    const address = document.querySelector('textarea[name="address"]').value;
    const languageInputs = document.querySelectorAll('input[name="language"]:checked');
    const languages = Array.from(languageInputs).map((input) => input.value).join(', ');

    const td1 = document.createElement('td');
    td1.innerText = firstName;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = lastName;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = dob;
    tr.appendChild(td3);

    const td4 = document.createElement('td');
    td4.innerText = gender;
    tr.appendChild(td4);

    const td5 = document.createElement('td');
    td5.innerText = city;
    tr.appendChild(td5);

    const td6 = document.createElement('td');
    td6.innerText = address;
    tr.appendChild(td6);

    const td7 = document.createElement('td');
    td7.innerText = languages;
    tr.appendChild(td7);

    tbody.appendChild(tr);
    table.appendChild(tbody);


    form.parentNode.replaceChild(table, form);
});