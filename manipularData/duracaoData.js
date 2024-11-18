const moment = require('moment');

// Criando uma duração de 2 horas e 30 minutos
const duracao = moment.duration({ hours: 2, minutes: 30 });
console.log(duracao.asMinutes()); // Ex: 150 minutos

// Adicionando duração a uma data
const dataInicial = moment();
const novaData = dataInicial.clone().add(duracao);
console.log(novaData.format("YYYY-MM-DD HH:mm")); // Ex: data inicial + 2 horas e 30 minutos
