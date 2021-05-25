let aprovados=['a','b','c','d']
aprovados[4]='e'
aprovados.push('f')//.push() lista array em ordem
console.log(aprovados.length)


aprovados[9]='i'
console.log(aprovados)

delete aprovados[9]
console.log(aprovados)





// .splice
// ( posicao do elemento array, 
// o numero de array percorrido (0 somente adiciona os lementos na posicao selecionada), 
// elementos modificados ou adicionados.)
aprovados.splice(1,1, 'Elmento1','Elemento2')
console.log(aprovados)