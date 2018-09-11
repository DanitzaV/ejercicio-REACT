import React,{ Component } from 'react';

// esto tiene que se un componetne funcional , porque no estoy utilizando el estado
export default class Titulo extends Component{
    render(){
        return(
            <h1 className="center">{this.props.titulo}</h1>
        )
    }
}