import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=>{
		actions.getAllAgendas()
	},[])
	
	const agendaMap = store.home.map((user,index) => <div key={index}>
		<Link>{user}</Link>
	</div>)

	// const toggleChange = ({target})=>{
	// 	setSearch(target.value)
	// 	const agendas = store.home
	// 	const filteredAgendas = agendas.filter(agenda => agenda.includes(target.value))
	// 	console.log(filteredAgendas)
	// }

	return(
		<div className="text-center">
			<h1>List of Agendas</h1>
			<input type="text" placeholder="Write Your Name Here" value={store.search} onChange={(event)=>actions.toggleChange(event)}></input>
			<div>
				{agendaMap}
			</div>
		</div>
	)
}

