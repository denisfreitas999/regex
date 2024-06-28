const fs = require('fs');
const bancoCSV = '../db/database.csv';
const banco = fs.readFileSync(bancoCSV, 'utf-8');

const patternCPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g

const matchRegex = banco.match(patternCPF);

console.log(matchRegex);