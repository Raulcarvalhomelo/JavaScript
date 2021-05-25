mes=num=>{
    let meses=['Janeiro','Fevereiro','Marco','Abril','Maio','Junho','Julho','Setembro','Outubro','Novembro','Dezembro']
    return meses[--num]

}
console.log(mes(5))
console.log(mes(4))




mes1=_=>{
    switch(_){
        case 1:
            return'Janeiro'
        case 2:
            return'Fevereiro'
        case 3:
            return'Marco'
        case 4:
            return'Abril'
        case 5:
            return'Maio'
        case 6:
            return'Junho'
        case 7:
            return'Julho'
        case 8:
            return'Agosto'
        case 9:
            return'Setembro'
        case 10:
            return'Outubro'
        case 11:
            return'Novembro'
        case 12:
            return'Dezembro'
        default:
            return'Mes nao existe'
    }
    
}
console.log(mes1(13))