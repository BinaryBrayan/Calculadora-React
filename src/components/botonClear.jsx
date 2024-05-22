import React from "react";
import '../styles/botonClear.css'


const BotonClear=(props)=>(
    <div className="btn-clear" onClick={props.manejarClear}>
        {props.children}
    </div>
);


export default BotonClear;