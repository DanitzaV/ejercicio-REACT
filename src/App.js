import React, { Component } from 'react';
import './App.css';
import TarjetasSouthPark from './Componentes/TarjetasSouth';
import TituloFuncional from './Componentes/Titulo/Titulo';
import Formulario from './Componentes/Formulario';


class App extends Component {
  render() {
    return (<div>
      <TituloFuncional  titulo="SOUTH PARK"></TituloFuncional>
      
      <div className="contTarjeta">
        <TarjetasSouthPark></TarjetasSouthPark>
      </div>
    </div>

    );
  }
}

export default App;
