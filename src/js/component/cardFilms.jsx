import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CardFilm = ( films ) => {

    const { store, actions } = useContext(Context);
   /*  console.log(films); */

   const addToFav = store.favorites.includes(films.name)

   function addFavorites() {
    // actions.addFavorite(films.name)
    actions.favoriteList(films.name)
  }


  
    return (
        <div className="card" id="homeCard" style={{ width: "18rem" }}> {/* Aquí se corrige el prop style */}
            <img className="card-img-top"
             src={films.filmsImageUrl} alt="" 
            />
            <div className="card-body">
                <h5 className="card-title">{films.name} </h5>
                
                <Link to={`/detalles/films/${films.uid}`}>
                    <button className="btn btn-outline-primary">Learn more</button>
                </Link> {/* Se cambia <a> por <Link> */}

                <a href="#" className="btn btn-outline-warning ms-5" onClick={addFavorites}><i className={`fa- regular fa-heart ${addToFav ? "fas" : "far"}`}></i></a>

            </div>
        </div>
    ); 
};
