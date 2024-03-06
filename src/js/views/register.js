import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/register.css";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex justify-content-center align-items-center" style={{height: "85vh"}}>
			<div className="border rounded p-4 grow1">
				<div className="d-flex flex-column">
					<label htmlFor="userName">Insert Agenda Name</label>
					<input className="mb-2" name="userName" type="text"></input>
					<label htmlFor="userName">What is Your Favorite Color? <small className="text-muted">Optional</small></label>
					<input className="mb-2" name="userName" type="text"></input>
				</div>
				<div>
					<Link to="/">
						<button className="btn btn-primary me-2">Register Agenda</button>
					</Link>
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
				</div>
			</div>
			<div className="grow3">
				<img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1659384025/220801-Ossola-Gossip-tease_eqab4c"></img>
			</div>
		</div>
	);
};
