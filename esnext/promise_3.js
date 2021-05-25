function gerarNumeros(min,max) {
    if (min>max){
        [max,min]=[min,max]
    }
    return new Promise(resolve=>{
        const aleatrio=parseInt(Math.random()*(max-min+1)+min)
        resolve(aleatrio)
    })
}
gerarNumeros(1,10)
    .then(num=>num*10)
    .then(numx10=>`numero gerado x10 ${numx10}`)
    .then(console.log)