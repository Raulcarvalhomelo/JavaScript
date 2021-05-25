const alunos=[
    {nome:'joao', nota:7.5},
    {nome:'maria', nota:5.5},
    {nome:'pedro', nota:6},
    {nome:'ana', nota:8}
]

// Imperativo
let  total1=0
for( let i =0; i<alunos.length;i++){
    total1+=alunos[i].nota
}
console.log(total1/alunos.length)

// Declarativo
const getNota=alunos=>alunos.nota
const soma=(total,atual)=>total+atual

const total2=alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)