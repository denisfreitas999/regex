const fs = require('fs');
const bancoCSV = '../db/database.csv';
const banco = fs.readFileSync(bancoCSV, 'utf-8');

const patternNome = /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm

const matchRegex = banco.match(patternNome);

console.log(matchRegex);