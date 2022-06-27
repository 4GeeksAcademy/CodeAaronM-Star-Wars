import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";
import luke from "../../img/800x400.png"
import "../../styles/index.css";

export const DetailCharacter = () => {

  const { id } = useParams();
  const[name, setName] = useState([""]);
  const[birth, setBirth] = useState([""]);
  const[gender, setGender] = useState([""]);
  const[height, setHeight] = useState([""]);
  const[hair, setHair] = useState([""]);
  const[eye, setEye] = useState([""]);


  function Character(id) {

    console.log("loading character");
    fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/people/"+id, {
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
    setName(data.name)
    setBirth(data.birth_year)
    setGender(data.gender)
    setHeight(data.height)
    setHair(data.hair_color)
    setEye(data.eye_color)
    console.log("character with id "+id + " loaded succesfully.")
        //this.setState({ totalReactPackages: data.total })
      });
  }

  useEffect(() => {
	Character(id);
  }, []);

  function showCharacter() {
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
      <p className="card-text">{name} is a character of Star Wars with {hair} hair and {eye} eyes</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porttitor massa, vitae condimentum turpis ornare a. Praesent nec quam at elit semper malesuada. Aliquam ullamcorper orci id orci imperdiet placerat. Curabitur efficitur semper enim, ornare commodo libero sodales eget. Sed ullamcorper diam eros, id egestas enim congue sed. Morbi elementum nisi non dapibus dictum. Integer eget hendrerit dolor, eget pulvinar nisi.</p>

      <p>Aliquam semper nec tortor id finibus. Fusce rhoncus, turpis nec dictum imperdiet, est neque molestie enim, ut auctor nulla lorem a dolor. Aliquam mollis semper mi non congue. Sed laoreet, tellus ut accumsan laoreet, leo lorem molestie elit, non posuere justo massa posuere orci. Morbi tempus enim at porta vulputate. Suspendisse non lacus eu mauris malesuada bibendum ac id nisl. Aenean ullamcorper hendrerit velit, a tempus mauris iaculis non.</p>
     </div>           

          <div><hr className="redBar"/></div>
          <div className="d-flex bd-highlight red">
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Name</strong></p>
    <p>{name}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Birth Year</strong></p>
    <p>{birth}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Gender</strong></p>
    <p>{gender}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Height</strong></p>
    <p>{height}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Hair Color</strong></p>
  <p>{hair}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Eye Color</strong></p>
  <p>{eye}</p></div>
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

