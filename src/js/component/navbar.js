import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src= "https://i.pinimg.com/originals/9e/4b/8c/9e4b8cd05a0e5c0b1e9237d9013417af.png" className="navbar-brand mb-0 h1 m-3" style={{width: 6 + 'rem'}}/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button  className="btn btn-primary m-4">Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
