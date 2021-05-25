// promise =  uma callback hell melhorada
const http= require('http')

const getTurma=letra=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{
        http.get(url, res=>{
            let resultado =''
            res.on('data',dados=>{
                resultado+=dados
            })
            res.on('end',()=>{
                try{
                    resolve(JSON.parse(resultado))                
                }catch(e){
                    reject (e)
                }
            })
        })
    })
}
// Recurso do ES8
// Objetivo de Simplificar o uso de promises...

let obterAlunos=async()=>{ // se tirar o Async nao pode usar Await
// await so funciona dentro de uma funcao async
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA,turmaB,turmaC)
}//quando tem uma function async, ela sempre retorna
// um objeto do tipo asyncFunction
// em cima do asyncFunction que e chamado a funcao .then para executar
obterAlunos()
    .then(alunos=>alunos.map(a=>a.nome))
    .then(nomes=>console.log(nomes))
