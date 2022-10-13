import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import GrupoA from "../component/grupoA";
import GrupoB from "../component/grupoB";
import GrupoC from "../component/grupoC";
import GrupoD from "../component/grupoD";
import GrupoE from "../component/grupoE";
import GrupoF from "../component/grupoF";
import GrupoG from "../component/grupoG";
import GrupoH from "../component/grupoH";

export const Private = () => {
  const { store, actions } = useContext(Context);

  return (
    <form className="formulario">
      <label className="labform1">Email</label>
      <input placeholder="Introduce el email"></input>
      <label className="labform">Nickname</label>
      <input placeholder="Introduce el nickname"></input>
      <label className="labform">Password</label>
      <input className="inlab" type="password" placeholder="Introduce la contraseña"></input>

      <button className="btnSubmit">
        Submit
      </button>

      <p className="labform1">Si ya estás registrado pusla aquí</p>
    </form>
    //<div className="text-center mt-5">
    //<h1>Mundialistos Qatar 2022</h1>
    //<div className="FaseGrupos">

    //<GrupoA/>
    //<GrupoB/>
    //<GrupoC/>
    //<GrupoD/>
    //<GrupoE/>
    //<GrupoF/>
    //<GrupoG/>
    //<GrupoH/>

    //</div>
    //</div>
  );
};
