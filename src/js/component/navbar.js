import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png"
import PropTypes from "prop-types";

export const Navbar = (props) => {
	const { store, actions } = useContext(Context);
	/*console.log("name is: " + store.name)
	console.log("uid is: " + store.uid)
	console.log("category is: " + store.category)
	console.log("arr is: " + store.arr)
	const name = store.name
	const category = store.category
	const uid = store.uid


	function Favs() {
		
		if (category+"/"+uid && category+"/"+uid != "" && category+"/"+uid != undefined) {	
			return (
		<li className="row"><Link className="col-9" to={`/detail`+category+`/`+uid}>{name}</Link><i className="col fas fa-trash" onClick={() => actions.delete(category+"/"+uid) }></i></li>)}
		else {return(null);}};

		function Favch1() {
			if (ch1 && ch1 != "" && ch1 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailCharacter/1`}>{ch1}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch1") }></i></li>)}
			else {return(null);}};
		
		function Favch2() {
			if (ch2 && ch2 != "" && ch2 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailCharacter/2`}>{ch2}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch2") }></i></li>)}
			else {return(null);}};
	
		function Favch3() {
			if (ch3 && ch3 != "" && ch3 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailCharacter/3`}>{ch3}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch3") }></i></li>)}
			else {return(null);}};
	
		function Favch4() {
			if (ch4 && ch4 != "" && ch4 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailCharacter/4`}>{ch4}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch4") }></i></li>)}
			else {return(null);}};
	
		function Favch5() {
			if (ch5 && ch5 != "" && ch5 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailCharacter/5`}>{ch5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch5") }></i></li>)}
			else {return(null);}};
		
		function Favpl1() {
			if (pl1 && pl1 != "" && pl1 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailPlanet/1`}>{pl1}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl1") }></i></li>)}
			else {return(null);}};
						
		function Favpl2() {
			if (pl2 && pl2 != "" && pl2 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailPlanet/2`}>{pl2}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl2") }></i></li>)}
			else {return(null);}};
	
		function Favpl3() {
			if (pl3 && pl3 != "" && pl3 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailPlanet/3`}>{pl3}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl3") }></i></li>)}
			else {return(null);}};
	
		function Favpl4() {
			if (pl4 && pl4 != "" && pl4 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailPlanet/4`}>{pl4}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl4") }></i></li>)}
			else {return(null);}};
	
		function Favpl5() {
			if (pl5 && pl5 != "" && pl5 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailPlanet/5`}>{pl5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl5") }></i></li>)}
			else {return(null);}};
	
		function Favve1() {
			if (ve1 && ve1 != "" && ve1 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailVehicle/4`}>{ve1}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ve4") }></i></li>)}
			else {return(null);}};
	
		function Favve2() {
			if (ve2 && ve2 != "" && ve2 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailVehicle/6`}>{ve2}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ve6") }></i></li>)}
			else {return(null);}};
	
		function Favve3() {
			if (ve3 && ve3 != "" && ve3 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailVehicle/7`}>{ve3}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ve7") }></i></li>)}
			else {return(null);}};
	
		function Favve4() {
			if (ve4 && ve4 != "" && ve4 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailVehicle/8`}>{ve4}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ve8") }></i></li>)}
			else {return(null);}};
	
		function Favve5() {
			if (ve5 && ve5 != "" && ve5 != undefined) {return (
			<li className="row"><Link className="col-9" to={`/detailVehicle/14`}>{ve5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ve14") }></i></li>)}
			else {return(null);}};
	*/
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src={logo} /></span>
			</Link>

			<div className="ml-auto">
				<div className="dropdown mx-5">
  <a className="btn btn-primary dropdown-toggle mx-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
    Favorites <span className="badge bg-secondary"></span>
  </a>

  <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
  
  </ul>
</div>
			</div>
		</nav>
	);
};
