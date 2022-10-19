import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="formulario">
        <label className="labform1">Email</label>
        <input
          placeholder="Introduce el email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className="labform">Password</label>
        <input
          className="inlab"
          type="password"
          placeholder="Introduce la contraseña"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button
          className="btnSubmit"
          onClick={() => actions.login(email,password)}
        >
          Submit
        </button>

        <p className="labform1">Si no estás registrado pusla <Link to="/altas">aquí</Link> </p>
      </div>
    </>
  );
};

export default LoginForm;