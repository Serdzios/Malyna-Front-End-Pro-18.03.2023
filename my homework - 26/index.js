const table = document.getElementById('my-table');

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        const cellText = document.createTextNode((i-1)*10 + j);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    table.appendChild(row);
}
