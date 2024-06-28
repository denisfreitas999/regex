const fs = require('fs');
const bancoCSV = '../db/database.csv';
const banco = fs.readFileSync(bancoCSV, 'utf-8');

const regexData = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm;

const matchRegex = banco.match(regexData);

console.log(matchRegex);