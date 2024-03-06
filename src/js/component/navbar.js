import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 ms-2">GossipAgenda</span>
			</Link>
			<div className="ml-auto">
				<Link to="/register">
					<button className="btn btn-primary me-2">Register a New Agenda</button>
				</Link>
			</div>
		</nav>
	);
};
