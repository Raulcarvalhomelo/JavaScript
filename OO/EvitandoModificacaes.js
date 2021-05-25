//Object.preventExtensions = 
// nao permite adicionar novo atributos no OBJ, 
// (pode adicionar e alterar)

const produto=Object.preventExtensions({
    item:'Qualquer', preco:1.99, tag:'Promocao'
})
produto.item='Borracha'
produto.descricao='Borracha escolhar branca'
delete produto.tag
console.log(produto)

// Object.seal =
// Nao permite adicionar nem excluir 
// novos Atributos,(Pode alterar os valores.)
const pessoa={nome:'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome='Silva'
delete pessoa.nome
pessoa.idade = 28
console.log(pessoa)

// Object.freeze =
// Nao permite alterar, adicionar e excluir atributos
// congela o obj por completa para nada ser alterado

const carro=Object.freeze({
    marca:'volvo', modelo:'A40', velMax:250
})
carro.modelo='B50'
carro.tipo='Sedan'
delete carro.marca
console.log(carro)