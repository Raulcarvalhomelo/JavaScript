randomDado=(opcao)=>{
    switch(opcao){
        case 1:
            return `six-sided:  ${parseInt(Math.random()*6+1)}`
            break
        case 2:
            return `eitght-sided: ${parseInt(Math.random()*8+1)}`
            break
        case 3:
            return `ten-sided: ${parseInt(Math.random()*10+1)}`
            break
        case 4:
            return `twelve-sided: ${parseInt(Math.random()*12+1)}`
            break
        case 5:
            return `twenvy-sided: ${parseInt(Math.random()*20+1)}`
            break
        default:
            return 'Opcao invalida'
            break
    }
}

console.log(randomDado(1))
console.log(randomDado(2))
console.log(randomDado(3))
console.log(randomDado(4))
console.log(randomDado(5))
console.log(randomDado(6))