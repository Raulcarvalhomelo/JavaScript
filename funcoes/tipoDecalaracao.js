// function declaration   = pode se chamar a funcao antes da declaracao
console.log(soma(1,2))

function soma(x,y){
    return x+y
}

// function expression  = nao pode se chamar a funcao antes da declaracao
const sub = function (x,y){
    return x-y
}
console.log(sub(6,2))

// named function expression

const mult = function mult(x,y){
    return x*y
}
console.log(sub(8,3))
