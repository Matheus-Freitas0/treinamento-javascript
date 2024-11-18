const moment = require('moment');
const data = moment();

// Formato padrão (ISO 8601)
console.log(data.format()); // Ex: 2024-11-18T15:45:00+00:00

// Formatando com padrões específicos

console.log(data.format("DD/MM/YYYY"));
// Ex: 18/11/2024

console.log(data.format("dddd, MMMM Do YYYY, h:mm:ss a"));
// Ex: segunda-feira, novembro 18º 2024, 3:45:00 pm

console.log(data.format("[Hoje é] dddd"));
// Ex: Hoje é segunda-feira
