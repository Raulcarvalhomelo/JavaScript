// operador rest (juntar)/spread(espalhar) 
// e representado por ... (redisencias )
// usar rest como parametro de funcao


// usar spread com objeto
console.log('usar spread com objeto')
const funcionario ={nome:'ana', salario:1000.00}
const clone = {ativo:true, ...funcionario}
console.log(clone)

console.log(`\n`)

// usar spread com array
console.log(' usar spread com array')
const grupoA= ['a','b','c']
const grupoB= ['d','e','f']
const grupoFinal= [...grupoA,...grupoB, 'g',5]
console.log(grupoFinal)
