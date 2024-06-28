const axios = require('axios');
const fs = require('fs');

const url = 'https://monicahillman.github.io/monibank/';

axios.get(url)
    .then((response) => {
        const pagina = response.data;
        /* console.log(pagina); */
        /* // Salvar o conteúdo da página em um arquivo, se necessário
        fs.writeFileSync('index.html', pagina, 'utf-8'); */
        const regexCapturaTagsH = /<(h[1-6])[^>]*>(.*?)<\/(h[1-6])>/g;

        console.log(pagina.match(regexCapturaTagsH));
    })
    .catch(error => {
        console.error('Erro ao buscar a página:', error);
    });
