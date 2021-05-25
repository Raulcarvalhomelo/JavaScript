//set nao aceita repeticao e nao indexada
const times = new Set()
times.add('Vasco').add('Corinthians').add('Sao Paulo')
times.add('Palmeira')
times.add('flamengo')
times.add('Vasco')// vasco ja esta adicionado, entao nao repete

console.log (times)

const nomes=['Raquel','Lucas','Julia','Lucas'] //lucas nao ira se repetir
const nomesSet= new Set(nomes)
console.log(nomesSet)