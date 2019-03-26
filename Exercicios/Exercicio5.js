var lista = [
  { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
  { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
  { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
  { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
]



function buscar(parametro, dado, lista){
    return lista.find( (item)=> {
      return item[parametro] === dado
    });
}

console.log(buscar('nome', 'Erick', lista))



