import React from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img src={starwars} style={{height:"100px"}}/>
			</Link>
			<div className="ml-auto">
			<div className="dropdown me-5 me-5">
  <a className="btn btn-secondary dropdown-toggle btn-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">1</a></li>
  </ul>
</div>
			</div>
		</nav>
	);
};
