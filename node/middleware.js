// middleware patterns
const passo1=(ctx,next)=>{
    ctx.valor1='mid1'
    next()
}
const passo2=(ctx,next)=>{
    ctx.valor2='mid2'
    next()
}
const passo3=(ctx,next)=>{
    ctx.valor3='mid3'
    next()
}
const passo4=ctx=>{
    ctx.valor4='mid4'
}
const exec=(ctx,...response)=>{
    const execPasso=indice=>{
        response&&indice<response.length&&
            response[indice](ctx,()=>execPasso(indice+1))
    }
    execPasso(0)
}
const ctx={}
const ctx2={}
exec(ctx, passo1,passo3,passo2,passo4)
console.log(ctx)
console.log(' - - - - - - - - - - - - - - - - - - - ')
exec(ctx2, passo1,passo4) // passo4 nao chama o next
console.log(ctx2)