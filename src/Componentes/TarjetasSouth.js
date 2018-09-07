import React, { Component } from 'react';

const personajes = [{nombre: 'Eric Cartman', foto: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'
}, {nombre: 'Stan Marsh', foto: 'https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png'
}, {nombre: 'Kyle Broflovski', foto: 'https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png'
}, {nombre: 'Kenny McCormick', foto: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502'
}];

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