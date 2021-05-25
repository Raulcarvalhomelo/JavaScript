const pessoa={
    saudacao: 'Bom Dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar=pessoa.falar
falar() //conflito entre paradigmas: funcional e OO
const falardepessoa=pessoa.falar.bind(pessoa)
falardepessoa()

//bind amarra o objeto no this... this sempre sera o bind
