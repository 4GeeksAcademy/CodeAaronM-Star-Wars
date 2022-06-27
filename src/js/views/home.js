import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardCharacter from "./cardCharacter";
import CardPlanets from "../views/cardPlanets";
import ItemFavorite from "../component/itemFavorite";
import ItemFavoritePlanets from "../component/itemFavoritePlanets";


export const Home = () => {
	const { store, actions } = useContext(Context);

  function show() {
	if (store.characters == '' || store.planets =="") { 
		return (
	  
		  <div className="container flex text-center">
		  <h1>LOADING PAGE</h1>
		  <img className="w-100 p-3" src="https://payload.cargocollective.com/1/4/144792/10818195/vaderlukeREVISE.gif"/>
		  </div>);
		
	  } else
	 {
		return (
		<div>
			<h4>Characters</h4>	
				<div className="card-group card-group-custom ">
				{
						store.people.map(ch => 
							<CardCharacter 
							img=""
							characterName={ch.name}
							gender={ch.gender}
							hair={ch.hair_color}
							eye={ch.eye_color}
							id={ch.id}
							className="card mx-3 p-2"
							/>
						)
					}



				</div>
				<br/>
			<h4>Planets</h4>	
				<div className="card-group">
					{
						store.planets.map(pl => 
							<CardPlanets 
							img=""
							planetName={pl.name}
							population={pl.population}
							// population={}
							terrain={pl.terrain}
							id={pl.id}
							gravity = "1"
							/>
							
						)
					}

					</div>
				<br/>

			<h4>Favorites</h4>	
				<div className="card-group">
					{
						store.favoritePlanets.map(pl => 
							
							<ItemFavoritePlanets 
							id={pl.id}
							user_id={pl.user_id}
							planet_id={pl.planets_id}							/>
						)}{

						store.favoritePeople.map(pl => 
							
							<ItemFavorite
							id={pl.id}
							people_id={pl.people_id}
							user_id={pl.user_id}
							/>
							
						)
					}

					</div>
				<br/>
				
		</div>	

);
};
}
return(
	<div className="container">
		  {show()}
	</div>
);
};

