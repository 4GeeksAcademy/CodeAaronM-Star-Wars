import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png"
import PropTypes from "prop-types";
import Favorites from "./favorites";

export const Navbar = (props) => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/"><span className="navbar-brand mb-0 mx-5"><img src={logo}/></span></Link>
			<div className="ml-auto">
				<div className="dropdown mx-5">
  					<a className="btn btn-primary dropdown-toggle mx-5"
						href="#" role="button" id="dropdownMenuLink" 
						data-bs-toggle="dropdown" aria-expanded="false" >
    					Favorites <span className="badge bg-secondary"></span></a>
					<ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">				
  						{store.favorites.map((fav,i) => 							
							<Favorites 
								key = {i}
								id={fav.id}
								user_id={fav.user_id}
								item_id={fav.item_id}
								item_name={fav.item_name}
								category={fav.category}
							/>)}
 					</ul>
				</div>
			</div>
		</nav>
	);
};
