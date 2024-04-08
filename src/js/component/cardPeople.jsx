import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CardPeople = ( people ) => {

    const { store, actions } = useContext(Context);
    /* console.log(people); */

    const addToFav = store.favorites.includes(people.name)

    function addFavorites() {
      // actions.addFavorite(people.name)
      actions.favoriteList(people.name)
    }
  
    return (
        <div className="card" id="homeCard" style={{ width: "18rem" }}> {/* Aquí se corrige el prop style */}
            <img className="card-img-top"
             src={people.pplImageUrl} alt="" 
            />
            <div className="card-body">
                <h5 className="card-title">{people.name}</h5>

                <Link to={`/detalles/people/${people.uid}`}>
                    <button className="btn btn-outline-primary">Learn more</button>
                </Link> {/* Se cambia <a> por <Link> */}

                <a href="#" className="btn btn-outline-warning ms-5" onClick={addFavorites}><i className={`fa- regular fa-heart ${addToFav ? "fas" : "far"}`}></i></a>

            </div>
        </div>
    ); 
};