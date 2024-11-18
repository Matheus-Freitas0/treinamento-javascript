const moment = require('moment');

const data1 = moment("2024-11-18");
const data2 = moment("2024-12-25");

dataDeDifereca = data2.diff(data1, 'days'); // Ex: 37 
console.log(dataDeDifereca, "Dias de difereça"); // Ex: 37 Dias de diferença

semanaDeDifereca = data2.diff(data1, 'weeks');// Ex: 5 
console.log(semanaDeDifereca, "Semana de diferença"); // Ex: 5 Semanas de diferença
