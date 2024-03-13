import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import "../../styles/global.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light shadow-b">
			<Link to="/" style={{ width: "250px" }}>
				<img className="logo" src={logo}></img>
			</Link>
			<div className="ml-auto">
				<Link to="/register">
					<button className="btn btn-danger ms-2 me-2 btn-active-none">Register a New Agenda</button>
				</Link>
			</div>
		</nav>
	);
};
