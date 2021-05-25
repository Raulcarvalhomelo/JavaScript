const url='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios=require('axios')

axios.get(url).then(Response=>{
    const funcionarios=Response.data
    const chines=nacionalidade=>nacionalidade.pais =='China'
    const mulher=s=>s.genero =='F'
    const money=(func,funcAtual)=> {return func.salario < funcAtual.salario?func:funcAtual}
    
    const rest=funcionarios.filter(chines).filter(mulher).reduce(money)
    console.log(rest)
})