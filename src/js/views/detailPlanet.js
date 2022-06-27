import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import luke from "../../img/800x400.png"
import "../../styles/index.css";

export const DetailPlanet = () => {

  const { id } = useParams();
  const[name, setName] = useState([""]);
  const[climate, setClimate] = useState([""]);
  const[diameter, setDiameter] = useState([""]);
  const[gravity, setGravity] = useState([""]);
  const[orbitalPeriod, setOrbitalPeriod] = useState([""]);
  const[population, setPopulation] = useState([""]);
  const[rotationPeriod, setRotationPeriod] = useState([""]);
  const[surfaceWater, setSurfaceWater] = useState([""]);
  const[terrain, setterrain] = useState([""]);



  function Planet(id) {

    console.log("loading planet");
    fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/planets/"+id, {
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
    setName(data.name);
    setClimate(data.climate);
    setDiameter(data.diameter);
    setGravity(data.gravity);
    setOrbitalPeriod(data.orbital_period);
    setPopulation(data.population);
    setRotationPeriod(data.rotation_period);
    setSurfaceWater(data.surface_water);
    setterrain(data.terrain);
    console.log("planet with id "+id + " loaded succesfully.");

      });
  }

  useEffect(() => {
	Planet(id);
  }, []);

  function showPlanet() {
    if (name == '') { 
      return (
    
        <div className="container flex text-center">
        <h1>LOADING PAGE</h1>
        <img className="w-100 p-3" src="https://payload.cargocollective.com/1/4/144792/10818195/vaderlukeREVISE.gif"/>
        </div>);
      
    } else {
	return (
  
<div className="container flex">
<div className="row g-4">
   <div className="col-md-6">
      <img className="w-100 p-3" src={luke}/>
    </div>

    <div className="col-md-6">
      <h5 className="card-title">{name} </h5>
      <p className="card-text">{name} is a planet of Star Wars with {climate} climate and {gravity} gravity</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porttitor massa, vitae condimentum turpis ornare a. Praesent nec quam at elit semper malesuada. Aliquam ullamcorper orci id orci imperdiet placerat. Curabitur efficitur semper enim, ornare commodo libero sodales eget. Sed ullamcorper diam eros, id egestas enim congue sed. Morbi elementum nisi non dapibus dictum. Integer eget hendrerit dolor, eget pulvinar nisi.</p>

      <p>Aliquam semper nec tortor id finibus. Fusce rhoncus, turpis nec dictum imperdiet, est neque molestie enim, ut auctor nulla lorem a dolor. Aliquam mollis semper mi non congue. Sed laoreet, tellus ut accumsan laoreet, leo lorem molestie elit, non posuere justo massa posuere orci. Morbi tempus enim at porta vulputate. Suspendisse non lacus eu mauris malesuada bibendum ac id nisl. Aenean ullamcorper hendrerit velit, a tempus mauris iaculis non.</p>
     </div>           

          <div><hr className="redBar"/></div>
          <div className="d-flex bd-highlight red">
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Name</strong></p>
    <p>{name}</p>
  </div>

  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Climate</strong></p>
    <p>{climate}</p>
  </div>

  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Diameter</strong></p>
    <p>{diameter}</p>
  </div>

  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Gravity</strong></p>
    <p>{gravity}</p>
  </div>
  
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Orbital Period</strong></p>
  <p>{orbitalPeriod}</p>
  </div>

  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Population</strong></p>
    <p>{population}</p>
  </div>

  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Rotation Period</strong></p>
    <p>{rotationPeriod}</p>
  </div>

  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Surface Water</strong></p>
    <p>{surfaceWater}</p>
  </div>

  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Terrain</strong></p>
    <p>{terrain}</p>
  </div>
  
  </div>
  </div>
    </div>);
  }
}

    return(
        <div className="container">
              {showPlanet()}
        </div>
    );
};

