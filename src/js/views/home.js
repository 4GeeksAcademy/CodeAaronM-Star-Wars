import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import "../../styles/home.css";
import Card from "./cardCharacter";
import CardPlanets from "../views/cardPlanets";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const Home = () => {
	const[character, setCharacter] = useState([""])
	const[planets, setPlanetList] = useState([""])
	const[vehicles, setVehicles] = useState([""])

async function Planets() {
	console.log("loading planets");

	try{
		const response = await fetch ("https://www.swapi.tech/api/planets", {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  });
		let responseData = await response.json();

		let planets = responseData.results;
		planets.splice(5);

		// for(let i = 0 ; i < 5 ; i++){
		// 	console.log(planets[i].url);
		// 	const charResponse = await fetch(planets[i].url, {
		// 		method: "GET"
		// 	});
		// 	let responseCharData = await charResponse.json();
		// 	let charDetails = responseCharData.result;
		// 	planets[i].detail = charDetails;
		// }

		console.log(planets);
		setPlanetList(planets);
		
	}catch(e){
		console.log(e);
		throw new TypeError("Sorry, There's no JSON here!");
	}

	// fetch("https://www.swapi.tech/api/planets", {
	// 	method: "GET",
	// 	headers: {
	// 	"Content-Type": "application/json",
	// 	},
	// })
	// .then(response => {
	// 	var contentType = response.headers.get("content-type");
	// 	if(contentType && contentType.includes("application/json")) {
	// 		return response.json();
			
	// 	}
	// 	throw new TypeError("Sorry, There's no JSON here!");
	// 	})
	// .then((data) => {
	// 	console.log(data.results);
	// 	setPlanetList(data.results)
	// 	//this.setState({ totalReactPackages: data.total })
	// 	});
}

async function Characters() {

    console.log("loading characters");

	try{
		const response = await fetch ("https://www.swapi.tech/api/people", {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  });
		let responseData = await response.json();

		let characters = responseData.results;
		characters.splice(5);

		// for(let i = 0 ; i < 5 ; i++){
		// 	console.log(characters[i].url);
		// 	const charResponse = await fetch(characters[i].url, {
		// 		method: "GET"
		// 	});
		// 	let responseCharData = await charResponse.json();
		// 	let charDetails = responseCharData.result;
		// 	characters[i].detail = charDetails;
		// }

		console.log(characters);
		setCharacter(characters);
		
	}catch(e){
		console.log(e);
		throw new TypeError("Sorry, There's no JSON here!");
	}

    // fetch("https://www.swapi.tech/api/people", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
	// .then(response => {
	// 	var contentType = response.headers.get("content-type");
	// 	if(contentType && contentType.includes("application/json")) {
	// 	  return response.json();
	// 	}
	// 	throw new TypeError("Sorry, There's no JSON here!");
	//   })
	// .then((data) => {
	//   console.log(data.results); 
	//   setCharacter(data.results);
    //   });
  }

  async function Vehicles() {
	console.log("loading vehicles");

	try{
		const response = await fetch ("https://www.swapi.tech/api/vehicles", {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  });
		let responseData = await response.json();

		let vehicles = responseData.results;
		vehicles.splice(5);

		// for(let i = 0 ; i < 5 ; i++){
		// 	console.log(planets[i].url);
		// 	const charResponse = await fetch(planets[i].url, {
		// 		method: "GET"
		// 	});
		// 	let responseCharData = await charResponse.json();
		// 	let charDetails = responseCharData.result;
		// 	planets[i].detail = charDetails;
		// }

		console.log(vehicles);
		setPlanetList(vehicles);
		
	}catch(e){
		console.log(e);
		throw new TypeError("Sorry, There's no JSON here!");
	}

	// fetch("https://www.swapi.tech/api/planets", {
	// 	method: "GET",
	// 	headers: {
	// 	"Content-Type": "application/json",
	// 	},
	// })
	// .then(response => {
	// 	var contentType = response.headers.get("content-type");
	// 	if(contentType && contentType.includes("application/json")) {
	// 		return response.json();
			
	// 	}
	// 	throw new TypeError("Sorry, There's no JSON here!");
	// 	})
	// .then((data) => {
	// 	console.log(data.results);
	// 	setPlanetList(data.results)
	// 	//this.setState({ totalReactPackages: data.total })
	// 	});
}

  useEffect(() => {
	console.log(process.env.BACKEND_URL);
	Characters();
	Planets();
	Vehicles();

  }, []);


  function showCharacter() {
	if (character == '' || planets =="") { 
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
						character.map(ch => 
							<Card 
							img=""
							name={ch.name}
							// gender={ch.detail.properties.gender}
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
						planets.map(pl => 
							<CardPlanets 
							img=""
							planetName={pl.name}
							// population={}
							// population={}
							// terrain={}
							uid={pl.uid}
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

