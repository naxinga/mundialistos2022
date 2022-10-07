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
import GrupoX from "../component/grupoX";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Mundialistos Qatar 2022</h1>
			<div className="FaseGrupos">
			
			<GrupoA/>
			<GrupoB/>
			<GrupoC/>
			<GrupoD/>
			<GrupoE/>
			<GrupoF/>
			<GrupoG/>
			<GrupoH/>

			</div>
		</div>
	);
};
