const moment = require('moment');

const dataInicial = moment("2024-11-01");
const dataFinal = moment("2024-11-30");
const dataTeste = moment("2024-10-18");

if (dataTeste.isBetween(dataInicial, dataFinal)) {
  console.log("A data está entre as duas datas!");
}
else {
  console.log("A data não está entre as duas datas.");
}

if (dataTeste.isBetween(dataInicial, dataFinal, 'year', '[]')) {
  console.log("A data está entre as duas datas no mesmo ano!");
}