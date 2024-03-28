const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const table = document.getElementById('formDataTable');
    table.innerHTML = '';

    for (const [key, value] of formData.entries()) {
        const row = document.createElement('tr');
        const keyCell = document.createElement('td');
        keyCell.textContent = key;
        const valueCell = document.createElement('td');
        valueCell.textContent = value;

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        table.appendChild(row);
    }
});