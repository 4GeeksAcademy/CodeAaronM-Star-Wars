import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import Card from "./cardCharacter";
import luke from "../../img/800x400.png"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/index.css";

export const DetailVehicle = () => {

  const { id } = useParams();
  const[name, setName] = useState([""]);
  const[model, setModel] = useState([""]);
  const[manufacturer, setManufacturer] = useState([""]);
  const[vehicle_class, setVehicle_class] = useState([""]);
  const[crew, setCrew] = useState([""]);
  const[passengers, setPassengers] = useState([""]);


  function Vehicle(id) {

    console.log("loading vehicle");
    fetch("https://www.swapi.tech/api/vehicles/"+id, {
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
		throw new TypeError("API error");
	  })
	.then((data) => {
    setName(data.result.properties.name)
    setModel(data.result.properties.model)
    setManufacturer(data.result.properties.manufacturer)
    setVehicle_class(data.result.properties.vehicle_class)
    setCrew(data.result.properties.crew)
    setPassengers(data.result.properties.passengers)
    console.log("done")
        //this.setState({ totalReactPackages: data.total })
      });
  }

  useEffect(() => {
	Vehicle(id);
  }, []);

  function showVehicle() {
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
      <p className="card-text">{name} is a {model} vehicle of Star Wars, it's belong to {vehicle_class} class vehicle</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porttitor massa, vitae condimentum turpis ornare a. Praesent nec quam at elit semper malesuada. Aliquam ullamcorper orci id orci imperdiet placerat. Curabitur efficitur semper enim, ornare commodo libero sodales eget. Sed ullamcorper diam eros, id egestas enim congue sed. Morbi elementum nisi non dapibus dictum. Integer eget hendrerit dolor, eget pulvinar nisi.</p>

      <p>Aliquam semper nec tortor id finibus. Fusce rhoncus, turpis nec dictum imperdiet, est neque molestie enim, ut auctor nulla lorem a dolor. Aliquam mollis semper mi non congue. Sed laoreet, tellus ut accumsan laoreet, leo lorem molestie elit, non posuere justo massa posuere orci. Morbi tempus enim at porta vulputate. Suspendisse non lacus eu mauris malesuada bibendum ac id nisl. Aenean ullamcorper hendrerit velit, a tempus mauris iaculis non.</p>
     </div>           

          <div><hr className="redBar"/></div>
          <div className="d-flex bd-highlight red">
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Name</strong></p>
    <p>{name}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Model</strong></p>
    <p>{model}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Manufacturer</strong></p>
    <p>{manufacturer}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Vehicle Class</strong></p>
    <p>{vehicle_class}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Crew Capacity</strong></p>
  <p>{crew}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Passengers Capacity</strong></p>
  <p>{passengers}</p></div>
  </div>
  </div>
    </div>);
  }
}
    return(
        <div className="container">
              {showVehicle()}
        </div>
    );
};

