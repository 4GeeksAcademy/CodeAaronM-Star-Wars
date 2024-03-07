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
			<div className="container">
				{
					store.eachAgenda.map((agds) => {
						return (
							<div key={agds.id} className="list-group-item d-flex justify-content-between" style={{ padding: '2rem' }}>
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
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};






{/* <ul className="list-group">
				{store.eachAgenda.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul> */}