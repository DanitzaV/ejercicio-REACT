import React, { Component} from 'react';

class Formulario extends Component{
    constructor(){
        super();
        // va a crear una copia , el estado e inmutable
        this.state = {
            nombre: null,
            apellido: null,
        }
        this.saludar = this.saludar.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    saludar(){
        console.log(this.state)
        return alert(this.state.nombre);
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'text' ? target.checked : target.value;
        const name = target.nombre;
    
        this.setState({
          [name]: value
        });
        // this.setState({nombre: event.target.value})

    }
    render(){
        return(
            <div>
            <input type="text" checked={this.state.nombre} nombre="nombre" onChange={this.handleChange}/>
                <input type="text" apellido="apellido" onChange={this.handleChange}/>
                <button onClick={this.saludar}>Saludar</button>
            </div>
        )
    }
}
export default Formulario;