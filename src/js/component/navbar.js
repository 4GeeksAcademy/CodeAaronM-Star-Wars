import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src={logo} /></span>
			</Link>
			{/* <Link to="/detail">
				<span className="navbar-brand mb-0 h1 mx-5">detail view</span>
			</Link> */}

			<div className="ml-auto">
				<Link to="/demo">
				<div class="dropdown mx-5">
  <a class="btn btn-primary dropdown-toggle mx-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
    Favorites <span class="badge bg-secondary">3</span>
  </a>

  <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Luke Skywalker <i class="fa-solid fa-trash"></i></a> </li>
    <li><a class="dropdown-item" href="#">Darth Vader <i class="fa-solid fa-trash"></i></a></li>
    <li><a class="dropdown-item" href="#">Princess Leia <i class="fa-solid fa-trash"></i></a></li>
  </ul>
</div>
				</Link>
			</div>
		</nav>
	);
};
