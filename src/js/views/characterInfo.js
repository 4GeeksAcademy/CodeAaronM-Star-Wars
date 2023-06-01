import React, { useContext, useEffect } from "react";
import {useParams } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";



const CharacterInfo=()=>{
    const params = useParams();
	const {id} = params;
	const { store } = useContext(Context);
	const [actualPage, setActualPage] = useState();

    useEffect(()=>{
		if(store.characters == 0) return;
		const actualInfo = store.characters.find((item)=>item.result.uid == id);
		console.log(actualInfo);
		setActualPage(actualInfo);
	}, [params])

        return (
            <>
            <div className="row m-5 p-4 ">
            <div className="col-6 text-center">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${actualPage?.result.uid}.jpg`} alt="..."/>
        </div>
        <div className="col-6 text-start">
            <h2>{actualPage?.result.properties.name}</h2>
            <p>{actualPage?.result.description}</p>
            <p>The famous Star Wars saga by director George Lucas. The saga centers on his knowledge of the Force, his fall to the Dark side, and ultimately his redemption and death.</p>
        
        </div>
        </div>
        <div className="row text-danger p-4 border-top border-danger m-4">
        <div className="col text-center">
                <h4>Name</h4>
                <h5>{actualPage?.result.properties.name}</h5>
            </div>
                    <div className="col text-center ">
                <h4>Birth Year</h4>
                <h5>{actualPage?.result.properties.birth_year}</h5>
            </div>
            <div className="col text-center">
                <h4>Gender</h4>
                <h5>{actualPage?.result.properties.gender}</h5>
            </div>
            <div className="col text-center">
                <h4>Height</h4>
                <h5>{actualPage?.result.properties.height}</h5>
            </div>
            <div className="col text-center">
                <h4>Skin Color</h4>
                <h5>{actualPage?.result.properties.skin_color}</h5>
            </div>
            <div className="col text-center">
                <h4>Eye Color</h4>
                <h5>{actualPage?.result.properties.eye_color}</h5>
            </div>
         </div>
         </>
    );
};

export default CharacterInfo;