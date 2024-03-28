const data = {
  name: "Inbar Cohen",
  countries: [
    { name: "Italy", year: 2019 },
    { name: "Japan", year: 2020 },
    { name: "Australia", year: 2021 }
  ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(response => response.text())
.then(responseText => {
  console.log(responseText);
})
.catch(error => {
  console.error("Error sending data to server:", error);
});