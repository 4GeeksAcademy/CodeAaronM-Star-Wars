import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

import { CardPlanet } from "../component/cardPlanets.jsx"
import { CardPeople } from "../component/cardPeople.jsx";
import { CardFilm } from "../component/cardFilms.jsx";


export const Home = () => {

	const { store, actions } = useContext(Context);
	const { characterImages, planetsImages, filmsImages } = store;

	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
		actions.getFilms();
		/* console.log(store.people);
		console.log(store.planets);*/
		console.log(store.singleCharacter) 
	  }, []);
	  

	  return(
			<div className="container">
               
				<h2 className="mt-5 mb-2">Characters</h2>			
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.people.map((item, index)=> {
								return(
									<CardPeople
										pplImageUrl={characterImages[item.name]}
										name={item.name}
										uid={item.uid}

										key={index}
									/>
								)}
							)}
				</div>	

				<h2 className="mt-5 mb-2">Planets</h2>
				<div className="row flex-row flex-nowrap overflow-auto mb-3">
					{store.planets.map((item, index)=> {
								return(
									<CardPlanet
										planetsImageUrl={planetsImages[item.name]}
										name={item.name}
										uid={item.uid}
										key={index}
									/>
								)}
							)}
				</div>

				<h2 className="mt-5 mb-2">Films</h2>
				<div className="row flex-row flex-nowrap overflow-auto mb-3">
					{store.films.map((item, index)=> {
						
								return(
									<CardFilm
										filmsImageUrl={filmsImages[item.properties.title]}
										name={item.properties.title}
										uid={item.uid}
										key={index}
									/>
								)}
							)}
				</div>
			</div>
	  )
 };
