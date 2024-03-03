import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import { Context } from "../store/appContext"

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	console.log(store.favourites);

	return (
		<nav className="navbar navbar-light bg-dark mb-3 d-flex justify-content-between">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img style={{ width: "80px", height: "50px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"></img></span>
			</Link>
			<div className="ml-auto">

				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle me-5" style={{width:"150px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favourites.map((item, index)=> index)}
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favourites.map((item, index) => (<li className="text-primary d-flex justify-content-between" key={index}>{item}<span onClick={() =>
							actions.deleteFavourites(store.favourites.filter((item, myIndex) => index !== myIndex))}><i className="fas fa-trash"></i></span></li>))}

					</ul>
				</div>


			</div>
		</nav>
	);
};
