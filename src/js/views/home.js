import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardCharacter from "./cardCharacter";
import CardPlanets from "../views/cardPlanets";
import CardVehicles from "./cardVehicles";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.characters)

	


  function showCharacter() {
	if (store.characters == '' || store.planets =="" || store.vehicles =="") { 
		return (
	  
		  <div className="container flex text-center">
		  <h1>LOADING PAGE</h1>
		  <img className="w-100 p-3" src="https://payload.cargocollective.com/1/4/144792/10818195/vaderlukeREVISE.gif"/>
		  </div>);
		
	  } else {
		return (
		<div>
			<h4>Characters</h4>	
				<div className="card-group card-group-custom">

					{
						store.characters.map(ch => 
							<CardCharacter 
							img=""
							characterName={ch.name}
							gender={ch.gender}
							// hair={ch.detail.properties.hair_color}
							// eye={ch.detail.properties.eye_color}
							uid={ch.uid}
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
							// population={}
							// population={}
							// terrain={}
							uid={pl.uid}
							gravity = "1"
							/>
						)
					}

					{/* <CardPlanets 
						img=""
						planetName="Tatooine"
						population=""
						terrain=""
						/>
						
						<CardPlanets 
						img=""
						planetName="Alderaan"
						population=""
						terrain=""
						/>

						<CardPlanets 
						img=""
						planetName="Yavin IV"
						population=""
						terrain=""
						/> */}
				</div>
				<br/>
				<h4>Vehicles</h4>	
				<div className="card-group card-group-custom">

					{
						store.vehicles.map(ve => 
							<CardVehicles 
							img=""
							vehicleName={ve.name}
							// gender={ch.detail.properties.gender}
							// hair={ch.detail.properties.hair_color}
							// eye={ch.detail.properties.eye_color}
							uid={ve.uid}
							/>
						)
					}
				</div> 
				
		</div>	

);
};
}
return(
	<div className="container">
		  {showCharacter()}
	</div>
);
};

