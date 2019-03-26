var dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
]

function calculaAreaTotal(dimensao) {
  return dimensao.reduce(function(ant, val) {
    return ant + (val.altura * val.comprimento);    
  }, 0);
}

console.log(calculaAreaTotal(0))