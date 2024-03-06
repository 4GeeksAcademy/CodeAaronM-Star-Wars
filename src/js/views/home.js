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
	
	const agendaMap = store.allAgendas.map((user,index) => <div key={index}>
		<Link>{user}</Link>
	</div>)

	return(
		<div className="text-center">
			<h1>List of Agendas</h1>
			<input type="text" placeholder="Write Your Name Here" value={store.search} onChange={(event)=>actions.toggleChange(event)}></input>
			<div>
				{!store.agendasFiltered.length > 0 ? 
					store.allAgendas.map((user,index) => 
						<div key={index}>
							<Link>{user}</Link>
						</div>) 
					: 
					store.agendasFiltered.map((user,index) => 
						<div key={index}>
							<Link>{user}</Link>
						</div>)
				}
			</div>
		</div>
	)
}

