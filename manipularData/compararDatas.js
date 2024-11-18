const moment = require('moment');

const data1 = moment("2024-11-18");
const data2 = moment("2024-12-25");

console.log(data1.isBefore(data2)); // true

console.log(data1.isAfter(data2));  // false

console.log(data1.isSame("2024-11-18")); // true
