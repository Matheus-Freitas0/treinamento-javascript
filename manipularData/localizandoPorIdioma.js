const moment = require('moment-timezone');

// Configurando a linguagem para português
moment.locale('pt-br');

const data = moment();
console.log(data.format('LLLL')); // Ex: segunda-feira, 18 de novembro de 2024 15:30
