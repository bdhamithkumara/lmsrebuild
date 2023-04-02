import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Unilogo from "../images/unilogo.svg";


const LNavbar = () => {

  const navigate = useNavigate();

  const gotoLogout = () => {
    navigate("/");
  }


  return (
    <div className=" bg-[#3B1234]">
    <nav
      className="navbar is-fixed-top has-shadow  bg-[#3B1234]"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand  bg-[#3B1234]">
        <NavLink  className="navbar-item">
          <img src={Unilogo} width="112" height="28" alt="logo" className=" bg-white"/>
        </NavLink>

        <a
          href="!#"
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu  bg-[#3B1234]">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button hover:bg-[#F1B81F]" onClick={gotoLogout}>Log out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default LNavbar