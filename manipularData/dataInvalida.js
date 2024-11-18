const moment = require('moment-timezone');

const dataInvalida = moment("2024-13-40", "YYYY-MM-DD", true); // Validação estrita
console.log(dataInvalida.isValid()); // false

if (!dataInvalida.isValid()) {
  console.log("Data inválida!");
}
