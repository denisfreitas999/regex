const fs = require('fs');
const bancoCSV = '../db/database.csv';
const banco = fs.readFileSync(bancoCSV, 'utf-8');

/* const regexTelefone = /\(49\) 92361-2598/ */
const regexTelefone = /\(\d+\)\s\d+-\d+/g

const matchRegex = banco.match(regexTelefone);

/* console.log(matchRegex); */

const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g

const mathCelular = banco.match(patternCel);

/* console.log(mathCelular); */

const regexFixo = /\(\d{2}\)\s\d{4,5}-\d{4}/g

const matchTelefone = banco.match(regexFixo);

console.log(matchTelefone);

