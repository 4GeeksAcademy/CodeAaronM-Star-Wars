import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import "../../styles/global.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllAgendas()
	}, [])

	const phrases = [
		"Looks like this one is hiding something interesting, you should take a look jiji 😳",
		"I wonder how many contacts this agenda may have... Don't you want to see?!?!",
		"Wao TOP agenda to Gossip, there should be a contact in there that can help you with something 🤐",
		"Look i know you will not believe me, but trust me, you want to gossip this agenda, TRUST ME 😉"
	]

	const agendaMap = store.allAgendas.map((user, index) =>
		<div key={index} className="userCard">
			<Link to={"/contactLi/" + user} className="card h-100 d-block text-decoration-none link">
				<div className="card-body">
					<h3 className="card-title">{user}</h3>
					<p className="card-text">{phrases[Math.floor(Math.random() * phrases.length)]}</p>
				</div>
				<span className="eyes">👀</span>
			</Link>
		</div>
	)

	const agendaFiltered = store.agendasFiltered.map((user, index) =>
		<div key={index} className="userCard">
			<Link to={"/contactLi/" + user} className="h-100 d-block text-decoration-none link">
				<div className="card-body">
					<h3 className="card-title">{user}</h3>
					<p className="card-text">{phrases[Math.floor(Math.random() * phrases.length)]}</p>
				</div>
				<span className="eyes">👀</span>
			</Link>
		</div>
	)

	return (
		<div className="text-center">
			<h1 className="mt-3">Go<span style={{ color: "#f80753" }}>ss</span>ip Agendas</h1>
			<input className="input" type="text" placeholder="Write Your Agenda Name" value={store.search} onChange={(event) => actions.toggleSearch(event)}></input>
			<div className="wrapper">
				{!store.agendasFiltered.length > 0 ? agendaMap : agendaFiltered}
			</div>
		</div>
	)
}