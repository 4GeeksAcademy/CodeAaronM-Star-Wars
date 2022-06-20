import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png"
import PropTypes from "prop-types";

export const Navbar = (props) => {
	const { store, actions } = useContext(Context);
	const ch1 = [sessionStorage.getItem("ch1")];
	const ch2 = [sessionStorage.getItem("ch2")];
	const ch3 = [sessionStorage.getItem("ch3")];
	const ch4 = [sessionStorage.getItem("ch4")];
	const ch5 = [sessionStorage.getItem("ch5")];
	const pl1 = [sessionStorage.getItem("pl1")];
	const pl2 = [sessionStorage.getItem("pl2")];
	const pl3 = [sessionStorage.getItem("pl3")];
	const pl4 = [sessionStorage.getItem("pl4")];
	const pl5 = [sessionStorage.getItem("pl5")];
	const ve1 = [sessionStorage.getItem("ve1")];
	const ve2 = [sessionStorage.getItem("ve2")];
	const ve3 = [sessionStorage.getItem("ve3")];
	const ve4 = [sessionStorage.getItem("ve4")];
	const ve5 = [sessionStorage.getItem("ve5")];

	function Favch1() {
		if (ch1 && ch1 != "" && ch1 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/1`}>{ch1}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch1") }></i></li>)}
		else {return(null);}};
	
	function Favch2() {
		if (ch2 && ch2 != "" && ch2 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/2`}>{ch2}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch2") }></i></li>)}
		else {return(null);}};

	function Favch3() {
		if (ch3 && ch3 != "" && ch3 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/3`}>{ch3}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch3") }></i></li>)}
		else {return(null);}};

	function Favch4() {
		if (ch4 && ch4 != "" && ch4 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/4`}>{ch4}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch4") }></i></li>)}
		else {return(null);}};

	function Favch5() {
		if (ch5 && ch5 != "" && ch5 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/5`}>{ch5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("ch5") }></i></li>)}
		else {return(null);}};
	
	function Favpl1() {
		if (pl1 && pl1 != "" && pl1 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detailPlanets/1`}>{pl1}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl1") }></i></li>)}
		else {return(null);}};
					
	function Favpl2() {
		if (pl2 && pl2 != "" && pl2 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detailPlanets/2`}>{pl2}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl2") }></i></li>)}
		else {return(null);}};

	function Favpl3() {
		if (pl3 && pl3 != "" && pl3 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detailPlanets/3`}>{pl3}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl3") }></i></li>)}
		else {return(null);}};

	function Favpl4() {
		if (pl4 && pl4 != "" && pl4 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detailPlanets/4`}>{pl4}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl4") }></i></li>)}
		else {return(null);}};

	function Favpl5() {
		if (pl5 && pl5 != "" && pl5 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/1`}>{pl5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl5") }></i></li>)}
		else {return(null);}};

	function Favpl5() {
		if (pl5 && pl5 != "" && pl5 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/1`}>{pl5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl5") }></i></li>)}
		else {return(null);}};

	function Favpl5() {
		if (pl5 && pl5 != "" && pl5 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/1`}>{pl5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl5") }></i></li>)}
		else {return(null);}};

	function Favpl5() {
		if (pl5 && pl5 != "" && pl5 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/1`}>{pl5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl5") }></i></li>)}
		else {return(null);}};

	function Favpl5() {
		if (pl5 && pl5 != "" && pl5 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/1`}>{pl5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl5") }></i></li>)}
		else {return(null);}};

	function Favpl5() {
		if (pl5 && pl5 != "" && pl5 != undefined) {return (
		<li className="row"><Link className="col-9" to={`/detail/1`}>{pl5}</Link><i className="col fas fa-trash" onClick={() => actions.delete("pl5") }></i></li>)}
		else {return(null);}};
	
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
  <Favch1/>
  <Favch2/>
  <Favch3/>
  <Favch4/>
  <Favch5/>
  <Favpl1/>
  <Favpl2/>
  <Favpl3/>
  <Favpl4/>
  <Favpl5/>
  </ul>
</div>
			</div>
		</nav>
	);
};
