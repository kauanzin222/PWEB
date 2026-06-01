const fs = require('fs');
const data = fs.readFileSync('cidade.txt');

console.log(data.toString());