import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams, Link } from "react-router-dom";

export const DetailPlanets = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getSinglePlanet(uid);
    }, []);

    const planet = store.singlePlanet; // Obtener la información del planeta desde el store
    const planetImageUrl = store.planetsImages[planet.name]; // Obtener la URL de la imagen del planeta

    return (
        <div className="container">
            <div className="card " id="detailCard">
                <img src={planetImageUrl} className="card-img-top" alt=""/>
                <div className="card-body ">
                    <h5 className="card-title">{planet.name}</h5>
                    <hr />
                    <p className="card-text"><b>Population:</b> {planet.population}</p>
                    <p className="card-text"><b>Diameter:</b> {planet.diameter}</p>
                    <p className="card-text"><b>Rotation period:</b> {planet.rotation_period}</p>
                    <p className="card-text"><b>Orbital period:</b> {planet.orbital_period}</p>
                    <p className="card-text"><b>Gravity:</b> {planet.gravity}</p>
                    <p className="card-text"><b>Climate:</b> {planet.climate}</p>
                    <p className="card-text"><b>Terrain:</b> {planet.terrain}</p>
                    <p className="card-text"><b>Surface water:</b> {planet.surface_water}</p>

                </div>
            </div>

       

            <Link to="/">
                <button className="btn btn-outline-dark" id="backHome">Back home</button>
            </Link>

           
        </div>
    );
};