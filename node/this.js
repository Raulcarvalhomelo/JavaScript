// this fora de uma function aporta para exports
console.log(this=== global)
console.log(this=== module)
console.log('-   -')
console.log(this=== module.exports)
console.log(this===exports)
console.log('-------------')

// this dentro de uma function aporta para global
function logThis(){
    
    console.log('Dentro da funcao')
    console.log('-------------')
    console.log(this===exports)
    console.log(this===module.exports)
    console.log(this===global)

}
logThis()