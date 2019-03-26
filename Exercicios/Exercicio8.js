var produtos = [
    { nome: 'Cereal', preco: '10', dataValidade: '21/02/2017' },
    { nome: 'Suco de Abacaxi', preco: '12', dataValidade: '01/01/2017' },
    { nome: 'Torta de frango', preco: '25', dataValidade: '07/07/2017' }
]


function existeProdutosDatados(produtos, data) {
    console.log(data)
    var dataReferencia = new Date();
    if (data){
        dataReferencia = new Date(data);
        console.log(dataReferencia)
    } 
    return produtos.some(function (produto) {
        return new Date(produto.dataValidade) < dataReferencia;
    });
}

console.log(existeProdutosDatados(produtos,'01/01/2018'))