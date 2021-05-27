const express =require('express')
const app=express()

app.use(express.urlencoded({extended:true}))

app.post('/usuarios',(req,resp)=>{
    console.log(req.body)
    resp.send('Foi Enviado')
})
app.post('/usuarios/:id', (req,resp)=>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('Alterar')
})

app.listen(3003)
