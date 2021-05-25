const  porta=3003
//express server
const express=require('express')
const app=express()
const bd=require('./bancoDeDados')
const bodyParser=require('body-parser')

// .use aplica o metodo em todas as req
app.use(bodyParser.urlencoded({extended:true}))

app.get('/usuarios', (req,res)=>{
    //send envia o response para o servidor: 
    //send  converte automaticamente para JSON
    res.send(bd.getUsuarios())

})


app.get('/usuarios/:id/:nome',(req,res,next)=>{
    res.send(bd.getFuncionario(req.params.id))
    res.send(bd.getFuncionario(req.params.nome))
})

app.post('/usuarios', (req,res,next)=>{
    const usuarios = bd.salvarfuncionarios({
        nome: req.body.nome,
        pass: req.body.pass,
        
    })
    res.send(usuarios)//JSON
})
app.put('/usuarios/:id', (req,res,next)=>{
    const usuarios = bd.salvarfuncionarios({
        id:req.params.id,
        nome: req.body.nome,
        pass: req.body.pass,
        
    })
    res.send(usuarios)//JSON
})
app.delete('/usuarios/:id', (req,res,next)=>{
    const usuarios = bd.deleteUser(req.params.id)
    res.send(usuarios)//JSON
})


app.listen(porta,()=>{
    console.log(`Servidor na ${porta}.`)
})