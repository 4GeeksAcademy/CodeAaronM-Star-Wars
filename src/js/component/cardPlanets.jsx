import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CardPlanet = ( planets ) => {

    const { store, actions } = useContext(Context);
   /*  console.log(planets); */

   const addToFav = store.favorites.includes(planets.name)

   function addFavorites() {
    // actions.addFavorite(planets.name)
    actions.favoriteList(planets.name)
  }

  
    return (
        <div className="card" id="homeCard" style={{ width: "18rem" }}> {/* Aquí se corrige el prop style */}
            <img className="card-img-top"
             src={planets.planetsImageUrl} alt="" 
            />
            <div className="card-body">
                <h5 className="card-title"> {planets.name} </h5>
                
                <Link to={`/detalles/planets/${planets.uid}`}>
                    <button className="btn btn-outline-primary">Learn more</button>
                </Link> {/* Se cambia <a> por <Link> */}

                <a href="#" className="btn btn-outline-warning ms-5" onClick={addFavorites}><i className={`fa- regular fa-heart ${addToFav ? "fas" : "far"}`}></i></a>
            </div>
        </div>
    ); 
};
