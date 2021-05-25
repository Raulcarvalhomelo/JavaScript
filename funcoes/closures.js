// closure e o escopo criada quando a função é declarada.
// esse escopo permite a função acessar e manipular variaveis externas a função

// contexto lexico em ação
const x= 'global'
function fora(){
    const x='local'
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao=fora()
console.log(minhaFuncao())
