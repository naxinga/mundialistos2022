import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IconContext } from "react-icons";
import "../../styles/navbar.css";

export const Navbar = () => {
const style = { color: "white", size: "40px" }
  return (
    <nav className="navbar bg-light">
      <div className="container">
	  
        <Link to="/">
          <span className="user">
            <AiFillHome styles = { style }/>
          </span>
        </Link>
		
        <Link to="/private">
          <span className="user">
            <FaUserAlt />
          </span>
        </Link>
      </div>
    </nav>
  );
};
