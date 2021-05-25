/// como Funciona o Map e como criar map
Array.prototype.map2=function(callback){
    const newArray =[]
    for(let i =0;i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}


const carrinho=[ 
    '{"nome": "Borracha","preco":3.45}',
    '{"nome": "Caneta","preco":1.00}',
    '{"nome": "Caderno","preco":5.00}',
    '{"nome": "Lapis","preco":1.50}'
]
//Retornar um array com os precos

const paraObjeto = json=>JSON.parse(json)
const precos=produto=>produto.preco

const rest=carrinho.map2(paraObjeto).map(precos)
console.log(rest)
