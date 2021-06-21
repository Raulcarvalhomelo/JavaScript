import React from 'react'
import ReactDOM from 'react-dom'
import BomDia from './components/BomDia'
// import Primeiro from './components/Primeiro'
import Multi,{BoaNoite} from './components/Mutiplos'
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="nascimento">
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
            <Filho nome="Julia"/>
        </Pai>
        <Saudacao />
        <BomDia/>
        <Multi.BoaTarde nome="john" />
        <BoaNoite nome="Carol" />        
    </div>
,document.getElementById('root'))
    