import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/register.css";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="register-wrapper">
			<div className="d-flex justify-content-center align-items-center">
				<div className="d-flex flex-column bg-white p-3 border rounded-3 mx-2" style={{minWidth:"60%"}} >
					<h2>Just a few steps away for your agenda!</h2>
					<label htmlFor="userName">Insert Agenda's Name</label>
					<input className="form-control" type="text" name="userName"></input>
					<label htmlFor="favColor">What is your favorite color</label>
					<input className="form-control" type="text" name="favColor"></input>
				</div>
			</div>
			<div className="bg-img">
			</div>
		</div>
	);
};
