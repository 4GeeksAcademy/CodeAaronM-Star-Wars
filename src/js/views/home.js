import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";



export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
	}, []);
	console.log(store.people);
	useEffect(() => {
		actions.getPlanets();

	}, []);
	console.log(store.planets);

	useEffect(() => {
		actions.getStarships();

	}, []);
	console.log(store.starships);

	return (
		<div className="base container bg-dark">
			<h2 className="text-danger ms-4">Characters</h2>
			<div className="card-people d-flex">
				{store.people.map((item, index) => (
					<div className="card-group" key={index}>
						<div className="card">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Gender: {item.gender}</p>
								<p className="card-text">Hair color: {item.hair_color}</p>
								<p className="card-text">Eye color: {item.eye_color}</p>
								
							</div>
							<div className="footer">
							<button className="boton-learn">Learn More!</button>
							<button className="boton-heart">
							<i className="fas fa-heart"/>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<h2 className="text-danger ms-4">Planets</h2>
			<div className="card-people d-flex">
				{store.planets.map((item, index) => (
					<div className="card-group" key={index}>
						<div className="card">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Population: {item.population}</p>
								<p className="card-text">Terrain: {item.terrain}</p>
								
							</div>
							<div className="footer">
							<button className="boton-learn">Learn More!</button>
							<button className="boton-heart">
							<i className="fas fa-heart"/>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<h2 className="text-danger ms-4">Starships</h2>
			<div className="card-people d-flex">
				{store.starships.map((item, index) => (
					<div className="card-group" key={index}>
						<div className="card">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Crew: {item.crew}</p>
								<p className="card-text">Consumables: {item.consumables}</p>
								
								
							</div>
							<div className="footer">
							<button className="boton-learn">Learn More!</button>
							<button className="boton-heart">
							<i className="fas fa-heart"/>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
	
			

		
		</div>
	);
};
