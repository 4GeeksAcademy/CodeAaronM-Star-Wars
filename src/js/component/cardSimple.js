import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

const CardSimple = ({item, categoria, url}) =>{
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

    return(
        <>
         <div className="card" style={{width: 18+'rem'}} id>
				<img src={`https://starwars-visualguide.com/assets/img/${categoria}/${item.result.uid}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{item.result.properties.name}</h5>
					{categoria == "characters" ? (
            			<>
              				<p>Gender: {item.result.properties.gender}</p>
              				<p>Hair color: {item.result.properties.hair_color}</p>
              				<p>Eyes color: {item.result.properties.eye_color}</p>
            			</>
          			) : (
            			<>
              				<p>Population: {item.result.properties.population}</p>
              				<p>Terrain: {item.result.properties.terrain}</p>
            			</>
          			)}
					<div className="d-flex justify-content-between">
					{categoria == "characters" ? (
            			<>
              				<a href="#" className="btn btn-outline-primary" onClick={() => navigate(`characters_descripcion/${item.result.uid}`)}>Learn more!</a>
            			</>
          			) : (
            			<>
							<a href="#" className="btn btn-outline-primary" onClick={() => navigate(`planet_descripcion/${item.result.uid}`)}>Learn more!</a>
            			</>
          			)}
						
						<button id="favorite" categoria="button" className="btn btn-outline-warning" onClick={()=>{actions.setFavorites(item.result.properties.name)}}><span className="material-symbols-outlined">
							favorite
						</span></button>
					</div>
				</div>
			</div>

        </>
    )
}

export default CardSimple;