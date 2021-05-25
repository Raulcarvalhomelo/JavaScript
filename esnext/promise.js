function falarDepoisDe(segundos,frase){
//promise sempre chamara uma funcao anonima tipo arrow
//parametro resolve = quando uma promise for atendida
//parametro reject  = quando a promise for quebrada
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase)
// para Testar o Reject comente a linha do resolve
            reject(frase)
        },segundos*1000)        
    })
}

falarDepoisDe(3, 'Legal')
    .then(frase=>frase.concat('!!'))
    .then(outraFrase=>console.log(outraFrase))
// catch = trata o erro de uma promise.
    .catch(e=>console.log('Erro'))