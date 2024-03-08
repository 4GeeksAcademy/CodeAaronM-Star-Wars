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

	const agendaMap = store.allAgendas.map((user, index) =>
		<div key={index}>
			<Link to={"/contactLi/" + user} className="h-100 d-block">
				<div className="card h-100">
					<div className="card-body">
						<h5 className="card-title">{user}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
			</Link>
		</div>
	)

	const agendaFiltered = store.agendasFiltered.map((user, index) =>
		<div key={index} className="flex-grow-1">
			<Link to={"/contactLi/" + user} className="h-100 d-block">
				<div className="card h-100">
					<div className="card-body">
						<h5 className="card-title">{user}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
			</Link>
		</div>
	)

	return (
		<div className="text-center">
			<h1>List of Agendas</h1>
			<input type="text" placeholder="Write Your Name Here" name="search" value={store.search} onChange={(event) => actions.toggleSearch(event)}></input>
			<div className="wrapper">
				{!store.agendasFiltered.length > 0 ? agendaMap : agendaFiltered}
			</div>
		</div>
	)
}