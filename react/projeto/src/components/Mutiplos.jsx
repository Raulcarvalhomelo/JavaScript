import React from 'react'


// Pode ser usado das duas formas 

// export const BoaTarde=props=><h1>Boa Tarde {props.nome}</h1>
const BoaTarde=props=><h1>Boa Tarde {props.nome}</h1>


// export const BoaNoite=props=><h1>Boa Tarde {props.nome}</h1>
const BoaNoite=props=><h1>Boa Tarde {props.nome}</h1>


export{BoaTarde,BoaNoite}// caso usa primeira,excluir essa.
export default{BoaTarde,BoaNoite}