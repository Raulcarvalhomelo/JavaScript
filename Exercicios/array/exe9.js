repetir=(numero,quantidade)=>{
    let res=[]
    for (let i=0;i<quantidade;i++){
        res.push(numero)
    }
    return res
}

console.log(repetir("código", 2)) // retornará ["código", "código"]
console.log(repetir(7, 3)) //