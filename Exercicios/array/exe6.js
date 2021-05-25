inverso=num=>{
    const tipo= typeof num
    if(tipo=="boolean")return !num
    else if (tipo == "number") return -num
    else
        return'Nao e boolean e nem numero'
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programacao"))
console.log(inverso(4))