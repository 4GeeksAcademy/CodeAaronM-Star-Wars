import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import { Context } from "../store/appContext"
import starwarslogo from '../../img/starwarslogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	console.log(store.auth)

	console.log(store.favourites);

	console.log(store.counter);

	const handleLogout = () =>   {
		localStorage.removeItem("token");
		navigate("/login")
	}

	return (

		<nav className="navbar bg-dark mb-3">

			<div className="col-4 d-flex justify-content-center">
				<Link to={"/"} style={{ textDecoration: 'none', color: "white" }} >
					<span className="navbar-brand mb-0 h1 ms-5" >Home</span>
				</Link>
			</div>
			<div className="col-4 d-flex justify-content-center">
				{store.auth ? <Link to={"/favorites"}>
					<button class="btn btn-secondary m-3" style={{ width: "200px" }} type="button">
						Your Favorites
					</button>
				</Link> : null}
			</div>
			<div className="col-4 d-flex justify-content-center">
				<Link to={"/login"} style={{ textDecoration: 'none', textAlign: "center" }}>
					<span className="login-link">Log In</span>
				</Link>
				<span className="login-link" onClick={handleLogout}>Log Out</span>
			</div>

		</nav>

	);
};
