import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import "../../styles/home.css";
import Card from "../views/card";
import CardPlanets from "../views/cardPlanets";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const Home = () => {
	const[character, setCharacter] = useState([""])
	const[planet_list, setPlanet_list] = useState([""])

	function Planets() {
		console.log("loading planets");
		fetch("https://www.swapi.tech/api/planets", {
		  method: "GET",
		  headers: {
			"Content-Type": "application/json",
		  },
		})
		.then(response => {
			var contentType = response.headers.get("content-type");
			if(contentType && contentType.includes("application/json")) {
			  return response.json();
			  
			}
			throw new TypeError("Sorry, There's no JSON here!");
		  })
		.then((data) => {
		  console.log(data.results);
		  setPlanet_list(data.results)
			//this.setState({ totalReactPackages: data.total })
		  });
	  }

function Characters() {

    console.log("loading characters");
    fetch("https://www.swapi.tech/api/people", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
	.then(response => {
		var contentType = response.headers.get("content-type");
		if(contentType && contentType.includes("application/json")) {
		  return response.json();
		}
		throw new TypeError("Sorry, There's no JSON here!");
	  })
	.then((data) => {
	  console.log(data.results); 
	  setCharacter(data.results);

        //this.setState({ totalReactPackages: data.total })
      });
  }

  useEffect(() => {
	console.log(process.env.BACKEND_URL);
	Characters();
	Planets();

  }, []);


  function showCharacter() {
	if (character == '' || planet_list =="") { 
		return (
	  
		  <div className="container flex text-center">
		  <h1>LOADING PAGE</h1>
		  <img className="w-100 p-3" src="https://payload.cargocollective.com/1/4/144792/10818195/vaderlukeREVISE.gif"/>
		  </div>);
		
	  } else {
		return (
		<div>


			<h4>Characters</h4>	
				<div className="card-group">
					<Card 
					img=""
					name= "" //Ya tengo los objetos fetcheados, falta pintarlos en las cards
					gender=""
					hair=""
					eye=""
					test=""
					/>

<Card 
					img=""
					name="C3-PO"
					gender=""
					hair=""
					eye=""
					/>

<Card 
					img=""
					name="R2-D2"
					gender=""
					hair=""
					eye=""
					/>

<Card 
					img=""
					name="Darth Vader"
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
					/>
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

