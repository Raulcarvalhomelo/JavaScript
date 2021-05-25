function calcularHoras(horasTrabalhas,salarioHora){
    PagaMes=salarioHora*horasTrabalhas
    return `o salario e de R$ ${PagaMes} `
}
console.log(calcularHoras(150,40.5))

// exe3 da Resposta

calculoSalario=(horasTrabalhas,salarioHora)=>{
    let salarioLiquido= horasTrabalhas*salarioHora
    let salarioBruto=salarioLiquido-salarioLiquido *30/100
    return `Salario Liquido ${salarioLiquido}, Salario Bruto ${salarioBruto}`
}

console.log(calculoSalario(180,60))