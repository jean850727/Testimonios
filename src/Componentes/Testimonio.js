import React, { Fragment } from "react";
import "../Hojas-de-estilo/Testimonio.css"

function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio"
                src={require(`../Imagenes/testimonio-${props.imagen}.png`)} alt="imagen de emma" />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    <strong>{props.nombre}</strong> en {props.pais}

                </p>
                <p className="cargo-testimonio">
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className="texto-testominio">"
                    
                    {props.testimonio}"
                </p>

            </div>


        </div>
    )
}
export default Testimonio;