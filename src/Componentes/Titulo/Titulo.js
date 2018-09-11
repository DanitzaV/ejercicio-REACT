import React from 'react';
// cuando no tiene cambio de estado o estado es fucional
 const TituloFuncional = (props) => {
    return (
        <h1 className="center">{props.titulo}</h1>
    )
}


export default TituloFuncional;