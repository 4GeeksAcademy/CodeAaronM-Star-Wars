import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const { favorites } = store;
	return (
		<>
			<nav className="navbar navbar-light bg-dark">
				<Link to="/">
					<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo.png" className="navbar-brand mb-0 h1 m-3" style={{ width: 15 + 'rem' }} />
				</Link>

				<div className="pe-5">
					<div className="rounded p-1">
						<button className=" navbar-toggler" id="button-91" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<a className="nav-link dropdown-toggle text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<span className="navbar-icon">Favorites <span className="text-white bg-danger rounded ps-1 pe-1" width="1" height="1">{store.favorites.length}</span></span>
							</a>
					
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{store.favorites.length == 0 ? <li className="favorite">(No Favorites)</li> : favorites.map((item) => {
								return <li>
									<div className="dropdown-item" href="#">{item}<span className="material-symbols-outlined ps-4 text-end" onClick={() => { actions.deleteFavorites(item) }}>
										❌
									</span>
									</div>
								</li>
							})}
						</ul>
							
							</button>
					</div>
				</div>
			</nav>
		</>
	);
};
