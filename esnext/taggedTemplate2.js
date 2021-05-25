function real(partes,...valores){
    const resultado=[]
    valores.forEach((valor,indice)=>{
        valor=isNaN(valor)?valor:`R$${valor.toFixed(2)}`
        resultado.push(partes[indice],valor)
    })
    return resultado.join('')
}
const preco =29.9
const precoparcela=(numeroParcela)=> {
    return (preco*0.05)+(preco/numeroParcela)    
}
console.log(real `Valor do juros ${preco*0.05}`)
console.log(real `1x de ${preco} ou 3x de ${precoparcela(3)}`)