import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";


export const AgendaInfo = () => {

	const { user } = useParams();

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getEachContact(user)
	}, [])


	return (
		<>
			<div className="container">
				<Link to="/">
					<button className="btn btn-danger mt-3">Back To Gossip</button>
				</Link>
				<Link to="/newcontact">
					<button className="btn btn-primary ms-2 mt-3">Add new contact</button>
				</Link>
			</div>

			<div className="container mt-5">
				{
					store.eachContact.map((agds) => {
						return (
							<div key={agds.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ padding: '2rem' }}>
								<h1 className="m-0">{agds.full_name}</h1>
								<p className="m-0">{agds.address}</p>
								<p className="m-0">{agds.phone}</p>
								<p className="m-0">{agds.email}</p>
								<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => actions.getContactInfo(agds.id)} style={{ border: 'none', backgroundColor: 'white' }}><ion-icon name="pencil-outline"></ion-icon></button>
								<button onClick={() => actions.deleteContact(agds.id, agds.agenda_slug)} style={{ border: 'none', backgroundColor: 'white' }}><ion-icon name="trash-outline"></ion-icon></button>
							</div>
						)
					})
				}
				<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">{`Edit Info`}</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body d-flex flex-column">
								<input className="form-control mb-2" placeholder="Name" value={store.currentUserData.full_name} name="full_name" onChange={(event) => actions.changeContactInfo(event)}></input>
								<input className="form-control mb-2" placeholder="Email" value={store.currentUserData.email} name="email" onChange={(event) => actions.changeContactInfo(event)}></input>
								<input className="form-control mb-2" placeholder="Address" value={store.currentUserData.address} name="address" onChange={(event) => actions.changeContactInfo(event)}></input>
								<input className="form-control mb-2" placeholder="Phone number" value={store.currentUserData.phone} name="phone" onChange={(event) => actions.changeContactInfo(event)}></input>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button onClick={() => actions.updateContactInfo()} data-bs-dismiss="modal" type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</div >

		</>
	);
};