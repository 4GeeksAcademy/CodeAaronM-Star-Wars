import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/register.css";
import logo from "../../img/logo.png"

const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="register-wrapper">
			<div className="d-flex justify-content-center align-items-center">
				<div className="d-flex flex-column bg-white rounded-2 p-3 mx-2 gap-2" style={{width:"50%"}} >
					<img className="logo" src={logo}></img>
					<Link to="/"className="btn btn-danger">Back To Home</Link>
					<div className="landr">
						<div className="left"></div>
						<div classname="circle" style={{margin: "5px", color:"#b1b6bd"}}>o</div>
						<div classname="right" style={{borderTop: "1px solid #e2e8f0", flexGrow: "1"}}></div>
					</div>
					<h2 className="mb-2">Register a New Agenda!</h2>
					<label className="" htmlFor="userName">Insert Agenda's Name</label>
					<input className="form-control" type="text" name="userName" placeholder="Example Name"></input>
					<label className="" htmlFor="favColor">What is your favorite color</label>
					<input className="form-control" type="text" name="favColor" placeholder="Red"></input>
					<button className="btn btn-danger mt-3">Register Agenda</button>
				</div>
			</div>
			<div className="bg-img">
			</div>
		</div>
	);
};

export default Register
