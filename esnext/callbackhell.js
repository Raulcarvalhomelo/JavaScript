// Callbackhell = e uma callaback dentro de outra callback
//callbackHell e uma alternativa ruim de substituir pelo Promise

const http= require('http')

const getTurma=(letra, callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res=>{
        let resultado =''
        res.on('data',dados=>{
            resultado+=dados
        })
        res.on('end',()=>{
            callback(JSON.parse(resultado))
        })
    })
}

let nomes =[]
getTurma('A', alunos=>{
    nomes=nomes.concat(alunos.map(a=>`Turma A: ${a.nome}`))
    getTurma('B',alunos=>{
        nomes=nomes.concat(alunos.map(a=>`Turma B ${a.nome} `))
        getTurma('C', alunos=>{
            nomes=nomes.concat(alunos.map(a=>`Turma C ${a.nome}`))
            console.log(nomes)
        })
    })
})


// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json