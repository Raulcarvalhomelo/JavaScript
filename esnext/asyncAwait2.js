function gerarNumeros(min,max,numerosproibidos) {
    if (min>max){
        [max,min]=[min,max]
    }
    return new Promise((resolve,reject)=>{
        const aleatrio=parseInt(Math.random()*(max-min+1)+min)
        if(numerosproibidos.includes(aleatrio)){
            reject ('Numero Existente!')
        }else{
            resolve(aleatrio)
        }
    })
}
async function gerarMEgasena(qtaNumeros) {
    try{        
        const numeros=[]
        for(let _ of Array(qtaNumeros).fill()){
           numeros.push(await gerarNumeros(1,60,numeros))
        }
        return numeros
    }catch(e){
        throw" NUmero Repetido"
    }
}

gerarMEgasena(16)
    .then(console.log)
    .catch(console.log)
