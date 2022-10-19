import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import SignUpForm from "../component/sign";

export const Altas = () => {
  const { store, actions } = useContext(Context);

  return (
    <SignUpForm/>
  );
};
