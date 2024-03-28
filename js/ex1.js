const url = 'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('paintings');
    data.forEach(painting => {
      const row = table.insertRow();
      Object.values(painting).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });