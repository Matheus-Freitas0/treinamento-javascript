let data = moment();

// Adicionar dias
data.add(7, 'days');
console.log(data.format("DD/MM/YYYY")); // Ex: 25/11/2024

// Subtrair meses
data.subtract(1, 'month');
console.log(data.format("DD/MM/YYYY")); // Ex: 25/10/2024

// Modificar ano, mês, etc.
data.year(2025).month(0).date(1);
console.log(data.format("DD/MM/YYYY")); // Ex: 01/01/2025
