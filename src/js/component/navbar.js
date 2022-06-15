import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png"

export const Navbar = () => {
	const favorites = [sessionStorage.getItem("favorites")];
	const one = [sessionStorage.getItem(1)];
	const two = [sessionStorage.getItem(2)];
	const three = [sessionStorage.getItem(3)];
	const four = [sessionStorage.getItem(4)];
	const five = [sessionStorage.getItem(5)];
	console.log(favorites);



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
    Favorites <span class="badge bg-secondary"></span>
  </a>

  <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
			<li>{one}</li>
			<li>{two}</li>
			<li>{three}</li>
			<li>{four}</li>
			<li>{five}</li>
  </ul>
</div>
				</Link>
			</div>
		</nav>
	);
};
