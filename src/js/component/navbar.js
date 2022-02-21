import React from "react";
import { Link } from "react-router-dom";
import trash from "../../img/trash.png"
import logo from "../../img/logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src={logo} /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<div class="dropdown mx-5">
  <a class="btn btn-primary dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
    Favorites
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Luke Skywalker</a><img src={trash} /></li>
    <li><a class="dropdown-item" href="#">Darth Vader</a></li>
    <li><a class="dropdown-item" href="#">Princess Leia</a></li>
  </ul>
</div>
				</Link>
			</div>
		</nav>
	);
};
