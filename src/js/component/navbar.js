import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png"
import PropTypes from "prop-types";
import FavoritePeople from "./favoritePeople";
import FavoritePlanets from "./favoritePlanets";

export const Navbar = (props) => {
	const { store, actions } = useContext(Context);

	function favorites () {
		return (
			<div>
				{store.favoritePlanets.map(pl => 							
		<FavoritePlanets 
			id={pl.id}
			user_id={pl.user_id}
			planet_id={pl.planets_id}
			/>)}
	{store.favoritePeople.map(pl => 
		<FavoritePeople
			id={pl.id}
			people_id={pl.people_id}
			user_id={pl.user_id}
			/>)}
			</div>
		);
	}
	



	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src={logo} /></span>
			</Link>

			<div className="ml-auto">
				<div className="dropdown mx-5">
  <a className="btn btn-primary dropdown-toggle mx-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
    Favorites <span className="badge bg-secondary"></span>
  </a>

  <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">				
  	{store.favoritePlanets.map(pl => 							
		<FavoritePlanets 
			id={pl.id}
			user_id={pl.user_id}
			planet_id={pl.planets_id}
			/>)}
	{store.favoritePeople.map(pl => 
		<FavoritePeople
			id={pl.id}
			people_id={pl.people_id}
			user_id={pl.user_id}
			/>)}
  </ul>
</div>
			</div>
		</nav>
	);
};
