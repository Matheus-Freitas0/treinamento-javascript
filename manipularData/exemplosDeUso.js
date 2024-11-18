const moment = require('moment');
moment.locale('pt-br');

// Data atual formatada
const agora = moment();
console.log(`Agora: ${agora.format('LLLL')}`);

// Adicionando 15 dias
const futura = agora.clone().add(15, 'days');
console.log(`Daqui a 15 dias: ${futura.format('LL')}`);

// Diferença entre hoje e o Natal
const natal = moment("2024-12-25");
console.log(`Dias até o Natal: ${natal.diff(agora, 'days')}`);

// Verificando se o Natal é antes do ano novo
const anoNovo = moment("2025-01-01");
console.log(`O Natal é antes do ano novo? ${natal.isBefore(anoNovo)}`);
