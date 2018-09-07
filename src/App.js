import React, { Component } from 'react';
import './App.css';
import TarjetasSouthPark from './Componentes/TarjetasSouth';

class App extends Component {
  render() {
    return (<div>
      <h1 className="center">SOUTH PARK</h1>
      <div className="contTarjeta">
        <TarjetasSouthPark></TarjetasSouthPark>
      </div>
    </div>

    );
  }
}

export default App;
