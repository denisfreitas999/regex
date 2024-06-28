const axios = require('axios');
const fs = require('fs');

const url = 'https://monicahillman.github.io/monibank/';

axios.get(url)
    .then((response) => {
        const pagina = response.data;
        /* console.log(pagina); */
        /* // Salvar o conteúdo da página em um arquivo, se necessário
        fs.writeFileSync('index.html', pagina, 'utf-8'); */

        // Buscando Tags H
        const regexCapturaTagsH = /<(h[1-6])[^>]*>(.*?)<\/\1>/g;

        // Buscando a palavra Bank
        /* const regexCapturaTagsH = /\bBank\b/g; */

        console.log(pagina.match(regexCapturaTagsH));
    })
    .catch(error => {
        console.error('Erro ao buscar a página:', error);
    });
