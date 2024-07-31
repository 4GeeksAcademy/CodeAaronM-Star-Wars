import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="card-body mb-2">
		<h2 className="text-center">Add Contact</h2>
		<div className="input-group mb-3">
			<span className="input-group-text" id="basic-addon1">Nombre</span>
			<input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
		</div>
		<div className="input-group mb-3">
			<span className="input-group-text" id="basic-addon1">E-mail</span>
			<input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
		</div>
		<div className="input-group mb-3">
			<span className="input-group-text" id="basic-addon1">Phone</span>
			<input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
		</div>
		<div className="input-group mb-3">
			<span className="input-group-text" id="basic-addon1">Address</span>
			<input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
		</div>

		<div className="d-grid gap-2">
			<button type="button" className="btn btn-primary">Save</button>
			<Link> or get to back to the contacts </Link>
			
		</div>
	
	</div>
);
