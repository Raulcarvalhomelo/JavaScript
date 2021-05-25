const percorrer=['a','b','c','d','e']


// callback para um forEach, recebe 3 paramnetros()
percorrer.forEach(function(nome,indice){ //1 indice sempre passado como segundo parametro e
    console.log(`${indice+1}) ${nome}`) // 2 nome e passa sempre como primeiro parametro
    //3 array sempre sera o 3 parametro a ser passado
}) // 4 paramentro e undefined
console.log('--------------------')

percorrer.forEach(nome=> console.log(nome))

console.log('--------------------')

const exibirArray = percorrer=> console.log(percorrer)
percorrer.forEach(exibirArray)