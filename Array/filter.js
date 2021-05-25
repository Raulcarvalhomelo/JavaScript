const produtos=[
    {nome:'note', preco:2400, fragil:true},
    {nome:'ipad', preco:1000, fragil:true},
    {nome:'vidro', preco:3.50, fragil:true},
    {nome:'plastico',preco:5.1, fragil:false}
    
]
console.log(produtos.filter(function(p)
{return p.preco>200 && p.fragil==true}))


console.log ('---------------------//----')


const fragil1=produtos.filter(p=>p.fragil)
const caros1=produtos.filter(p=>p.preco>500)

const rest=(fragil1,caros1)
console.log (rest)

console.log ('--------//----------------')

const fragil=p=>p.fragil
const caros=p=>p.preco>500

console.log (produtos.filter(fragil).filter(caros))

