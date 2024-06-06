import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams, Link } from "react-router-dom";

export const DetailFilms = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getSingleFilm(uid);
    }, []);

    const film = store.singleFilm; // Obtener la información del film desde el store
    const filmsImageUrl = store.filmsImages[film.title]; // Obtener la URL de la imagen del film
    console.log(store.film)

    return (
        <div className="container">
            <div className="card " id="detailCard">
                <img src={filmsImageUrl} className="card-img-top" alt=""/>
                <div className="card-body ">
                    <h5 className="card-title">{film.title}</h5>
                    <hr />
                    <p className="card-text"><b>Release date:</b><br></br> {film.release_date}</p>
                    <p className="card-text"><b>Director:</b><br></br> {film.director}</p>
                    <p className="card-text"><b>Producer/s:</b><br></br> {film.producer}</p>
                    <p className="card-text"><b>Opening Crawl:</b><br></br> {film.opening_crawl}</p>
                </div>
            </div>

       

            <Link to="/">
                <button className="btn btn-outline-dark" id="backHome">Back home</button>
            </Link>

           
        </div>
    );
};