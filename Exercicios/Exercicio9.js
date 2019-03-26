var ruas = [
    { nome: 'Rua 1', tamanho: 2500 },
    { nome: 'Rua 2', tamanho: 3400 },
    { nome: 'Rua 3', tamanho: 1400 }
];

function calculaDistancia(ruas) {
    var iteratorRuas = ruas[Symbol.iterator]();
    var totalDistancia = 0;
    var rua = iteratorRuas.next();
    do {
        totalDistancia += rua.value.tamanho;
        rua = iteratorRuas.next();
    }
    while (!rua.done);

    return totalDistancia;
}

console.log(calculaDistancia(ruas))