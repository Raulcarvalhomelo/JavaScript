const tecnoligia = new Map()
tecnoligia.set('react',{framework:false}),
tecnoligia.set('angular',{framework:true})

console.log(tecnoligia.react)// modo errado
// .get (valor da chave que quer saber )
console.log(tecnoligia.get('react'))
console.log(tecnoligia.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'funcao'],
    [{},'objeto'],
    [123,'numero']
])
chavesVariadas.forEach((vl,ch)=>{
    console.log(ch,vl)
})

// has procura se o elemente esta dentro do map
console.log(chavesVariadas.has(123)) // return true
//size mostra quantidade de elemento dentro do map
console.log(chavesVariadas.size)// 3 elemento ate aqui
// .set adiciona valor para chave ou substitui o valor existente.
console.log(chavesVariadas.set(123,'a'))// 'numero' substituido por 123
//.delete exclui o elemente
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))// return false
console.log(chavesVariadas.size)// apos delete fica 2 elementos
