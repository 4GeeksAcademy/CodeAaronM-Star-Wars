import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { BsXLg } from "react-icons/bs";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    // Verificar y asegurarse de que store.favoriteCharacters sea un objeto
   /*  useEffect(() => {
        if (!store.favoriteCharacters) {
            actions.setStore({ favoriteCharacters: {} });
        }
    }, []); */

    return (
        <nav className="navbar navbar-light bg-black m-3 px-4">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img style={{ width: "8rem" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
                </span>
            </Link>
            <div className="favorites ml-auto">
				<div className="btn-group me-5">
					<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites<span className="badge bg-secondary mx-1">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu bg-black">
						{store.favorites.length === 0 ?
							<li className="text-start">(empty)</li>
							: store.favorites.map((item, index) => {
								return (
									<li key={index}>
										<a className="dropdown-item text-start" id="dropDownList" href="#">{item} <i id="iconDelete" onClick={() => actions.deleteFavorite(item)}><BsXLg /></i></a>
									</li>)
							})}

					</ul>
				</div>
			</div>
        </nav>
    );
};
