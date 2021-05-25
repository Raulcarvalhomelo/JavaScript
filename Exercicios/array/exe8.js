function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
}

console.log(multiplicar(5, 5)) // retornará 25
console.log(multiplicar(7, 7)) // retornará 0