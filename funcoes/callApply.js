// Call vc passa os parametros dentro da funcao sem [](Carro, 0.17, '$'))
//Apply vc passa os parametros dentro da Array com [] (Carro, [0.17, '$']))


function getPreco(imposto=0, moeda='R$'){
    return `${moeda} ${this.preco * (1-this.desc)*(1+imposto)}`
}

const Carro = {preco: 50000, desc:0.20}


console.log(getPreco.call(Carro))
console.log(getPreco.apply(Carro))
console.log(getPreco.call(Carro, 0.17, '$'))
console.log(getPreco.apply(Carro,[0.17, '$']))