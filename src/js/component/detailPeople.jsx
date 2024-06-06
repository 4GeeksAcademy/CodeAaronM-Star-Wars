import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext.js";
import { useParams, Link } from "react-router-dom";

import "../../styles/detail.css"

export const DetailPeople = () => {
    const { store, actions} = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getSingleCharacter(uid);
		
	  }, []);


    const character = store.singleCharacter; 
    const characterImageUrl = store.characterImages[character.name]; 



    return (
        <div className="container">
            <div className="card" id="detailCard" >
                <img src={characterImageUrl} className="card-img-topp" alt=""/>
                <div className="divisor"></div>
                <div className="card-body ">
                    <h5 className="card-title">{character.name}</h5>
                    <hr />
                    <p className="card-text"><b>Birth year:</b> {character.birth_year}</p>
                    <p className="card-text"><b>Height:</b> {character.height}cm</p>
                    <p className="card-text"><b>Weight:</b> {character.mass}kg</p>
                    <p className="card-text"><b>Hair color:</b> {character.hair_color}</p>
                    <p className="card-text"><b>Skin color:</b> {character.skin_color}</p>

                </div>
            </div>


            <Link to="/">
                <button className="btn btn-outline-dark" id="backHome">Back home</button>
            </Link>
        </div>

        
    );
};
