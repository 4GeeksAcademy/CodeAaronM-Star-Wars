import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3 d-flex justify-content-between">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img style={{width:"80px", height:"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"></img></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favourites</button>
				</Link>
			</div>
		</nav>
	);
};
