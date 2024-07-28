import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the correct icon
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ps-4">
          <a className="navbar-brand" href="/">
            <h2 className="Titulo-Navbar">
              <span style={{ color: "#0066CC" }}>Fi</span>
              <span style={{ color: "#0099FF" }}>n</span>
              <span style={{ color: "#FFCC00" }}>n</span>
              <span style={{ color: "#FF9933" }}>a</span>
              <span style={{ color: "#0066CC" }}>ncity</span>
            </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
              <li className="nav-item p-1">
                <a className="nav-link active" aria-current="page" href="#home">
                  Inicio
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#Conocenos">
                  Conócenos
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#Services">
                  Servicios
                </a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#Contactos">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
