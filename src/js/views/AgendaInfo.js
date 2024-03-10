import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";


export const AgendaInfo = () => {

	const { user } = useParams();

	const { store, actions } = useContext(Context);

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
								<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => actions.getContactInfo(agds.id)} style={{ border: 'none', backgroundColor: 'white' }}><ion-icon name="pencil-outline"></ion-icon></button>
								<button onClick={() => actions.deleteContact(agds.id, agds.agenda_slug)} style={{ border: 'none', backgroundColor: 'white' }}><ion-icon name="trash-outline"></ion-icon></button>
							</div>
						)
					})
				}
				<Link to="/">
					<button className="btn btn-danger mt-3">Back To Gossip</button>
				</Link>
				<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">{`Edit ${store.editedUser.name} Info`}</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body d-flex flex-column">
								<input placeholder="Name" defaultValue={store.editedUser.name}></input>
								<input placeholder="Email" defaultValue={store.editedUser.email}></input>
								<input placeholder="Address" defaultValue={store.editedUser.address}></input>
								<input placeholder="Phone number" defaultValue={store.editedUser.phone}></input>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button onClick={() => actions.updateContactInfo() } type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	);
};