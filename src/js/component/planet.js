import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import "../../styles/home.css";
import Card from "../views/card";
import CardPlanets from "../views/cardPlanets";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import luke from "../../img/luke.jpg"
import "../../styles/index.css";

export const Planet = () => {
  const[planet, setPlanet] = useState([""]);
  const[name, setName] = useState([""]);
  const[climate, setClimate] = useState([""]);
  const[population, setPopulation] = useState([""]);
  const[orbital, setOrbital] = useState([""]);
  const[rotation, setRotation] = useState([""]);
  const[diameter, setDiameter] = useState([""]);


  function Planet() {

    console.log("loading");
    fetch("https://www.swapi.tech/api/planets/1", {
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
	  setPlanet(data.result.properties);
	  console.log(planet)
    setName(data.result.properties.name)
    setClimate(data.result.properties.climate)
    setPopulation(data.result.properties.population)
    setOrbital(data.result.properties.orbital_period)
    setRotation(data.result.properties.rotation_period)
    setDiameter(data.result.properties.diameter)
        //this.setState({ totalReactPackages: data.total })
      });
  }

  useEffect(() => {
	console.log(process.env.BACKEND_URL);
	Planet();
  }, []);

  function showCharacter() {
	console.log(planet)
	console.log(planet.name)
	if (planet == '') { 
    return (
  
      <div className="container flex text-center">
      <h1>LOADING PAGE</h1>
      </div>);
    
  } else {
    return (
  
      <div className="container flex">
      <div className="row g-4">
         <div className="col-md-6">
            <img className="w-100 p-3" src="https://i.pinimg.com/564x/c2/53/14/c25314256bdfb17bf6dcd53f50fc2282.jpg"/>
          </div>
      
          <div className="col-md-6">
            <h5 className="card-title">{name} </h5>
            <p className="card-text">{name} is a planet of Star Wars with {climate} climate and approx. {population} souls</p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porttitor massa, vitae condimentum turpis ornare a. Praesent nec quam at elit semper malesuada. Aliquam ullamcorper orci id orci imperdiet placerat. Curabitur efficitur semper enim, ornare commodo libero sodales eget. Sed ullamcorper diam eros, id egestas enim congue sed. Morbi elementum nisi non dapibus dictum. Integer eget hendrerit dolor, eget pulvinar nisi.</p>
      
            <p>Aliquam semper nec tortor id finibus. Fusce rhoncus, turpis nec dictum imperdiet, est neque molestie enim, ut auctor nulla lorem a dolor. Aliquam mollis semper mi non congue. Sed laoreet, tellus ut accumsan laoreet, leo lorem molestie elit, non posuere justo massa posuere orci. Morbi tempus enim at porta vulputate. Suspendisse non lacus eu mauris malesuada bibendum ac id nisl. Aenean ullamcorper hendrerit velit, a tempus mauris iaculis non.</p>
           </div>           
      
                <div><hr className="redBar"/></div>
                <div className="d-flex bd-highlight red">
        <div className="p-2 flex-fill bd-highlight">
          <p><strong>Name</strong></p>
          <p>{name}</p></div>
        <div className="p-2 flex-fill bd-highlight">
          <p><strong>Climate</strong></p>
          <p>{climate}</p></div>
        <div className="p-2 flex-fill bd-highlight">
          <p><strong>Population</strong></p>
          <p>{population}</p></div>
        <div className="p-2 flex-fill bd-highlight">
          <p><strong>Orbital Period</strong></p>
          <p>{orbital}</p></div>
        <div className="p-2 flex-fill bd-highlight">
          <p><strong>Rotation Period</strong></p>
        <p>{rotation}</p></div>
        <div className="p-2 flex-fill bd-highlight">
          <p><strong>Diameter</strong></p>
        <p>{diameter}</p></div>
        </div>
        </div>
          </div>);
    
  }
  

  }

    return(
        <div className="container">
              {showCharacter()}
        </div>
    );
};

