import React from "react";
import '../styles/boton.css';

function Boton(props){
    const esOperador = valorBoton => {
        return isNaN(valorBoton) && (valorBoton != "=") && (valorBoton != ".");
    }

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador':null}`}
        onClick={()=>props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;