import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import "../../styles/home.css";
import Card from "../views/card";
import CardPlanets from "../views/cardPlanets";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const Home = () => {
	const[people, setPeople] = useState([""])

	function Planets() {
		console.log("something");
		fetch("https://www.swapi.tech/api/planets", {
		  method: "GET",
		  headers: {
			"Content-Type": "application/json",
		  },
		})
		.then((response) => {response.json(),
			console.log("planetas", response);})
		.then((data) => {
		  console.log("planetas", data);
			//this.setState({ totalReactPackages: data.total })
		  });
	  }

function People() {

    console.log("loading");
    fetch("https://www.swapi.tech/api/people/1", {
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
	  console.log(data.result.properties.name);
	  
	  setPeople(data.result.properties);
	  console.log(people)
        //this.setState({ totalReactPackages: data.total })
      });
  }

  useEffect(() => {
	console.log(process.env.BACKEND_URL);
	People();
  }, []);

  function showCharacter() {
	console.log(people)
	console.log(people.name)
	return (<div><h1>{People.mass}</h1></div>);
  }


	return (
		<div>
            <div className="messages">
              {showCharacter()}

            </div>

			<h4>Characters</h4>	
			<button onClick={() => People()}>fetch</button>
			<button onClick={() => showCharacter()}>show in console</button>
				<div className="card-group">
					<Card 
					img=""
					name={People}
					gender=""
					hair=""
					eye=""
					test={People.name}
					/>

<Card 
					img=""
					name="Alvaro P"
					gender=""
					hair=""
					eye=""
					/>

<Card 
					img=""
					name="Alvaro P"
					gender=""
					hair=""
					eye=""
					/>

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
			<button onClick={() => Planets()}>fetch</button>
				<div className="card-group">
				<CardPlanets 
					img=""
					planetName="Barcelono"
					population=""
					terrain=""
					/>
					
					<CardPlanets 
					img=""
					planetName="Barcelona"
					population=""
					terrain=""
					/>

					<CardPlanets 
					img=""
					planetName="Barcelona"
					population=""
					terrain=""
					/>
				</div>
		</div>	

);
};


