const alunos=[
    {nome:'joao', nota:7.5, bolsista:false},
    {nome:'maria', nota:5.5, bolsista:true},
    {nome:'pedro', nota:6, bolsista:false},
    {nome:'ana', nota:8, bolsista:true},
]

//reduce = acumula todos os resultados da array, podendo somar.

const rest=alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador+atual
},10 )//caso queira passar um valor inicial
console.log (rest)