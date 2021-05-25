// pessoa -> endereco de memoria ->{...}
const pessoa={nome:'Joao'}
pessoa.nome='Pedro'
console.log(pessoa)

//Congela um Objeto
Object.freeze(pessoa)

pessoa.nome='Maria'
console.log(pessoa.nome)

//Congelar Obejeto diretamente
const pessoaConst= Object.freeze({nome:'Joao'})
pessoaConst.nome='Maria'
console.log(pessoaConst.nome)