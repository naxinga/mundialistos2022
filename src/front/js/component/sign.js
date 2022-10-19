import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const SignUpForm = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");


  return (
    <>
      <div className="formulario">
        <label className="labform1">Email</label>
        <input
          placeholder="Introduce el email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className="labform">Nickname</label>
        <input
          placeholder="Introduce el nickname"
          onChange={(e) => setNickname(e.target.value)}
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
          onClick={() => actions.signup(email, nickname, password)}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default SignUpForm;
