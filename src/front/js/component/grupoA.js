import React, { useContext } from "react";
import "../../styles/grupos.css";

export const GrupoA = () => {
    return (
        <>
        <div className="grupos">
            <div className="Letra">Grupo A</div>
            <div className="Primero"><div className="posicion Primero">1</div><div className="Equipo Primero">Qatar</div></div>
            <div className="Segundo"><div className="posicion Segundo">2</div><div className="Equipo Segundo">Ecuador</div></div>
            <div className="Tercero"><div className="posicion Tercero">3</div><div className="Equipo Tercero">Senegal</div></div>
            <div className="Cuarto"><div className="posicion Cuarto">4</div><div className="Equipo Cuarto">Países Bajos</div></div>
        </div>
        </>
    )
}