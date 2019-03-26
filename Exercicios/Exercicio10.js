function montaEnderecoCompleto(rua, cidade, numero, cep) {
    return `Endereço: ${rua}, ${numero} - ${cidade}, ${cep}`;
}

console.log(montaEnderecoCompleto('Orlando Jose', 'Tangamandapio', '97', '88801001' ))