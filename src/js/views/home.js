import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "./card";
import CardPlanets from "./cardPlanets";


import  Detail  from "./detail.js";

export const Home = () => (

		<div>
			<h4>Characters</h4>	
				<div className="card-group">
					<Card 
					img=""
					name="Alvaro P"
					gender=""
					hair=""
					eye=""
					/>
				</div>
				<br/>
			<h4>Planets</h4>	
				<div className="card-group">
				<CardPlanets 
					img=""
					planetName="Barcelona"
					population=""
					terrain=""
					/>
				</div>
		</div>	

);

