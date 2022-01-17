const axios=require('axios')

/* const url='http://files.cod3r.com.br/curso-js/funcionarios.json'
axios.get(url).then(Response=>{
    const funcionarios=Response.data
    // const chines=nacionalidade=>nacionalidade.pais =='China'
    // const mulher=s=>s.genero =='F'
    // const money=(func,funcAtual)=> {return func.salario < funcAtual.salario?func:funcAtual}
    
    // const rest=funcionarios.filter(chines).filter(mulher).reduce(money)
    console.log(funcionarios)
}) */

const url1= 'https://api.catarse.me/project_details?project_id=eq.128136'
axios.get(url1).then(Response=>{
    const catarse=Response.data

    console.log(catarse)
})

/* const localhost='http://localhost:3000/'
axios.get(localhost).then(Response=>{
    const peso=Response.data

    console.log(peso)
}) */