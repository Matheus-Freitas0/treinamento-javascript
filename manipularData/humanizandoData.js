const moment = require('moment');

const duracao = moment.duration(90, 'minutes');
console.log(duracao.humanize()); // Ex: "2 horas"

// Adicionando `true` para exibir com "em" ou "há"
console.log(duracao.humanize(true)); // Ex: "em 2 horas"