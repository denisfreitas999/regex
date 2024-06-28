function ehUmNome(nome) {
    const patternNome = /^(?!(.)\1)[A-Za-zÀ-ÿ -]{2,60}$/i.test(nome);
    if (!patternNome) {
        return `${nome} não é um nome válido.`;
    }
    return `${nome} é um nome válido.`;
}

const meu_nome = `Denisson Santos Alves de Freitas`;
console.log(ehUmNome(meu_nome));