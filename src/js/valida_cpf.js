function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\.|-/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais (CPFs inválidos conhecidos)
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Função para calcular o dígito verificador
    function calcularDigito(cpf, multiplicadorInicial) {
        let soma = 0;
        for (let i = 0; i < cpf.length; i++) {
            soma += parseInt(cpf.charAt(i)) * multiplicadorInicial--;
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }

    // Calcula e verifica o primeiro dígito verificador
    const digito1 = calcularDigito(cpf.substring(0, 9), 10);
    if (digito1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Calcula e verifica o segundo dígito verificador
    const digito2 = calcularDigito(cpf.substring(0, 10), 11);
    if (digito2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

// Exemplos de uso
console.log(validarCPF('12345678912')); // false
console.log(validarCPF('075.195.830-15')); // true
console.log(validarCPF('000.000.000-00')); // false
