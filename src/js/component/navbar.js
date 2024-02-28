import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img style={{width:"80px", height:"50px"}} src="https://cdn.imgbin.com/19/21/17/imgbin-skellig-michael-chewbacca-star-wars-computer-icons-star-wars-1K3isTPsdLiNwqzBDYgVAcqvU.jpg"></img></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-5">Favourites</button>
				</Link>
			</div>
		</nav>
	);
};
