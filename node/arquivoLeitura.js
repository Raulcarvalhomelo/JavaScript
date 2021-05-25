// fs = fileSystem
const fs=require('fs')

const caminho=__dirname + '/arquivo.json'

//sincrono...
const conteudo=fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrono ...
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config=JSON.parse(conteudo)// e preciso usar o JSON.parse para transformar em um objeto
    console.log(`${config.db.host}:${config.db.port}/ ${config.db.user}:${config.db.pass}`)
})

//  forma simple de ler um JSON
// Forma Sincrona...

const config=require('./arquivo.json')
console.log(config.db)

// leitura de uma Pasta
fs.readdir(__dirname,(err,arquivos)=>{
    console.log('-  -  -  - ')
    console.log('Conteudo da pasta')
    console.log('-  -  -  - ')
    console.log(arquivos)
})

