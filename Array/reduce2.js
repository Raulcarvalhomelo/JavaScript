const alunos=[
    {nome:'joao', nota:7.5, bolsista:false},
    {nome:'maria', nota:5.5, bolsista:true},
    {nome:'pedro', nota:6, bolsista:false},
    {nome:'ana', nota:8, bolsista:true},
]
//Desafio 1: Todos os alunos sao bolsistas?
const todosBolsistas=(resultado,bolsista)=>resultado&&bolsista //  && = e 
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno e bolsista?
const algumBolsista=(resultado,bolsista)=>resultado||bolsista //  || = ou
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))