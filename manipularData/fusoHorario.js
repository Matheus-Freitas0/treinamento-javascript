const moment = require('moment-timezone');

// Converter para um fuso horário específico
const dataTz = moment.tz("2024-11-18 15:30", "America/Sao_Paulo");
console.log(dataTz.format());
// Ex: 2024-11-18T15:30:00-03:00

// Exibir a mesma data em outro fuso
console.log(dataTz.tz("Europe/London").format());
// Ex: 2024-11-18T18:30:00+00:00
