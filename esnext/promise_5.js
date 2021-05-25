function funcionarOuNao(valor, chanceErro){
    return new Promise ((resolve , reject)=>{
        if(Math.random()<chanceErro){
            reject('Reject')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Teste...',0.5)
    .then(console.log)
    // .then(
    //     vl=>consol.log(vl),
    //     err=>console.log(`Erro Esp.:${err}`)
    // )
    .catch(err=>console.log(`Erro: ${err}`))
    

