import React, { Component } from 'react';
import personajes from './../request/data'
class TarjetasSouthPark extends Component {
    render(){
        return(
            <ul className="contenedorUL informacion">
                {personajes.map((e, i) => {
                    let num = i + 1;
                    return (
                        <li className="listpark">
                            <h4 className="tituloInfo">Informacion</h4>
                            <p>{`Tarjeta n° ${num} nombre: ${e.nombre}`}</p>
                            <img className="foto" src={e.foto} />
                        </li>
                    )
                })}

            </ul>
        )
    }
}

export default TarjetasSouthPark;