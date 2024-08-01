import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 px-4">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-auto">
        <Link to="/contactos">
          <button className="btn btn-primary">
            Ir a la página de contactos
          </button>
        </Link>
      </div>
      <div className="ml-auto">
        <Link to="/crearcontacto">
          <button className="btn btn-success">Crear un nuevo contacto</button>
        </Link>
      </div>
    </nav>
  );
};
