const pilotos=['vettel','alonso','raikkonen','massa']
console.log(pilotos)
// Pop remove o ultimo elemento do Array
pilotos.pop()
console.log(pilotos)

//.shift remove o primeiro elemento da array
pilotos.shift()
console.log(pilotos)

//.unshift adiciona ao primeiro elemento da array
pilotos.unshift('Hamilton')
console.log(pilotos)

//push adiciona ao ultimo elemento da array
pilotos.push('verstappen')


//.Slice retorna um novo Array 
const algunsPilotos = pilotos.slice(2,6) //pega apartir do elemento estipulado, no caso 2 a 6
console.log (algunsPilotos)

// .splice
// ( posicao do elemento array, 
// o numero de array percorrido (0 somente adiciona os lementos na posicao selecionada), 
// elementos modificados ou adicionados.)
pilotos.splice(1,0, 'Elmento1','Elemento2')
console.log(pilotos)
