function CriarProduto(nome,price){
    return{
        nome,
        price,
        desconto: `de 2 , preco ${price-2}`
    }
}
console.log(CriarProduto('toddy',10))
console.log(CriarProduto('nescau',5))