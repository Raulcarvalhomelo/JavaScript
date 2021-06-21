import React, { Component } from 'react'

export default class Saudacao extends Component{
    //  caso use somente state, e necessario fazer uma arrow function no onChange
    state={
        tipo:this.props.tipo,
    }
    // caso use Constructor, pode chamar somente a function
    constructor(props){
        //super e obrigatorio para construtor entender as props
        super(props)
        this.setNome=this.setNome.bind(this)

    }
    setTipo(e){
        this.setState({tipo:e.target.value})
    }
    setNome(e){
        this.setState({nome:e.target.value})
    }
    render(){
        const {tipo,nome} = this.state
        return(
            <div>
                <h1>{nome}, {tipo}!</h1>
                <hr />
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
                <input type="text" placeholder="Tipo..." value={tipo}onChange={e=>this.setTipo(e)}/>
            </div>
        )
    }
}