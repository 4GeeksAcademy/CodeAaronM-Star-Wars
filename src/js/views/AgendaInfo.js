import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";



export const AgendaInfo = () => {

	const { user } = useParams();

	const { store, actions } = useContext(Context);
	// console.log(store.eachAgenda);

	useEffect(() => {
		actions.getEachAgenda(user)
	}, [])


	return (
		<>
			<div className="container">
				{
					store.eachAgenda.map((agds) => {
						return (
							<div key={agds.id} className="list-group-item d-flex justify-content-between" style={{ padding: '2rem' }}>
								<h1>{agds.full_name}</h1>
								<p>{agds.address}</p>
								<p>{agds.phone}</p>
								<p>{agds.email}</p>
								<button onClick={() => alert('también en esto ok')} style={{ border: 'none', backgroundColor: 'white' }}><ion-icon name="pencil-outline"></ion-icon></button>
								<button onClick={() => deleteContact({agds})} style={{ border: 'none', backgroundColor: 'white' }}><ion-icon name="trash-outline"></ion-icon></button>
							</div>
						)
					})
				}
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};