import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const { favorites } = store;
	return (
		<nav className="navbar navbar-light bg-dark">
			<Link to="/demo">
				<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo.png" className="navbar-brand mb-0 h1 m-3" style={{ width: 15 + 'rem' }} />
			</Link>

			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="button-91 btn btn-dark dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites ({store.favorites.length})
					</button>
					<ul className="dropdown-menu justify-content-between">
						{!store.favorites.length == 0 ? (
							store.favorites.map((favorite, index) => {
								return <li
									className="d-flex flex-nowrap p-1"
									key={index}>
									<span className="dropdown-item">
										<Link
											className="favs-menu"
											style={{ textDecoration: 'none' }}
											to={favorite.url}>
											{favorite.name}
										</Link>
									</span>
									<span>
										<i className="dropdown-btn fa fa-trash pt-2 pe-2"
											onClick={() => {
												actions.deleteFavorites(index)
											}
											}>
										</i>
									</span>
								</li>
							}))
							: (<li className="text-center">No favorites</li>)
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
