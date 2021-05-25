//Map = gera uma nova array transformado
const nums =[1,2,3,4,5]

let numsMap = nums.map(e=>{return e*2})
console.log(numsMap)



const soma10=e=>e+10
const triplo=e=>e*3
const paraDinheiro=e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

rest=nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(rest)



rest=nums.map(triplo).map(paraDinheiro)
console.log(rest)

rest=nums.map(triplo).map(soma10).map(paraDinheiro)
console.log(rest)