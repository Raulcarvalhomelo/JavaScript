function gerarNumeros(min,max) {
    if (min>max){
        [max,min]=[min,max]
    }
    return new Promise(resolve=>{
        setTimeout( function() {  
            const aleatrio=parseInt(Math.random()*(max-min+1)+min)
            resolve(aleatrio)
        })
    })
}
function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeros(1,60,1500),
        gerarNumeros(1,60,1000),
        gerarNumeros(1,60,2000),
        gerarNumeros(1,60,3000),
        gerarNumeros(1,60,2500),
        gerarNumeros(1,60,500)
    ])
}
console.time('tempo')
gerarVariosNumeros()
    .then(numeros=>console.log(numeros))
    .then(()=>{
        console.timeEnd('tempo')
    })

