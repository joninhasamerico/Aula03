function calcularRaizQuadrada(num) {
  return num.map(function(num) {
    return Math.sqrt(num);
  });
}

console.log(calcularRaizQuadrada([9]))
