const moment = require('moment');

// Data atual
const now = moment();
console.log(now.format()); // Mostra a data e hora atuais no padrão ISO
//2024-11-18T14:48:23-03:00

// Data específica
const dataEspecifica = moment("2024-11-18");
console.log(dataEspecifica.format("YYYY-MM-DD"));
// 2024-11-18

// Data com hora
const dataHora = moment("2024-11-18 15:30", "YYYY-MM-DD HH:mm");
console.log(dataHora.format("YYYY-MM-DD HH:mm"));
// 2024-11-18 15:30
