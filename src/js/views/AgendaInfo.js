import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";



export const AgendaInfo = () => {

	const { user } = useParams();

	const { store, actions } = useContext(Context);
	console.log(store.eachAgenda);

	useEffect(() => {
		actions.getEachAgenda(user)
	}, [])


	return (
		<>
			<div className="container mt-5">
				{
					store.eachAgenda.map((agds) => {
						return (
							<div key={agds.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ padding: '2rem' }}>
								<h1>{agds.full_name}</h1>
								<p>{agds.address}</p>
								<p>{agds.phone}</p>
								<p>{agds.email}</p>
								<button onClick={() => alert('trabajaremos en esto luego xD')} style={{ border: 'none', backgroundColor: 'white' }}><ion-icon name="trash-outline"></ion-icon></button>
								<button onClick={() => alert('también en esto ok')} style={{ border: 'none', backgroundColor: 'white' }}><ion-icon name="pencil-outline"></ion-icon></button>
							</div>
						)
					})
				}
				<Link to="/">
					<button className="btn btn-danger mt-3">Back To Gossip</button>
				</Link>
			</div>
		</>
	);
};