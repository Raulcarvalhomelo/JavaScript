function soma(){
    let soma = []
    for (i in arguments ){
        soma+=arguments[i]
    }
    return soma
}
console.log(soma(1,2,5))