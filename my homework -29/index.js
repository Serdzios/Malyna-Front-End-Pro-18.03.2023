// Масив з об'єктами, що містять інформацію про кожен смайлик
const smileys = [
    {image: '🙂', count: 0},
    {image: '😀', count: 0},
    {image: '😊', count: 0},
    {image: '😍', count: 0},
    {image: '😎', count: 0},
];

// Функція для відображення смайликів та їх лічильників
function renderSmileys() {
    const smileysDiv = document.getElementById('smileys');
    smileysDiv.innerHTML = '';

    // Додавання HTML-коду для кожного смайлика та його лічильника
    smileys.forEach((smiley) => {
        const smileyDiv = document.createElement('div');
        smileyDiv.innerHTML = `
        <span class="smiley">${smiley.image}</span>
        <span class="count">${smiley.count}</span>
      `;

        // Додавання обробника події натискання на смайлик
        smileyDiv.addEventListener('click', () => {
            smiley.count++;
            renderSmileys();
        });

        smileysDiv.appendChild(smileyDiv);
    });
}

// Виклик функції для відображення смайликів при завантаженні сторінки
renderSmileys();