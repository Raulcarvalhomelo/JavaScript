const pessoa={
    nome:'ANA',
    idade:2,
    peso:14

}

console.log(Object.keys(pessoa)) //Keys Mostra as Chaves
console.log(Object.values(pessoa)) //mostra os Valores
console.log(Object.entries(pessoa))//sub array com chave e valor

Object.entries(pessoa).forEach(element => { //percorre todos os elementos da array retorna keys e values
    console.log(`${element[0]}:${element[1]}`) // padrao js para acessar as    
});

Object.entries(pessoa).forEach(([chave,valor]) => { //igual a de cima, somente uma opcao 
    console.log(`${chave}:${valor}`)
});

//Definir caracteristicas da Propriedades do Objeto
Object.defineProperty( pessoa, 'dataNascimento',{
    enumerable:true,//pode ser listada na lista da array
    writable:false,//pode ser modificada?
    value:'12/01/2120'
})
pessoa.dataNascimento='03/02/3035' // teste para mudar a propriedade
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object .assign
// concatenizar obj, e substitui o valor do objeto existente
const dest={a:1}
const o1={b:2}
const o2={c:3,a:4}
const obj=Object.assign(dest,o1,o2)//primeiro parametros(recebe,passa,passa)
console.log(obj)