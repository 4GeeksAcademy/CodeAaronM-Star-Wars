import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import CardSimple from "../component/cardSimple";


const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.characters);
	console.log(store.planets);

	return (
		<>
			<div className="container-fluid">
				<div className="row mx-5 mt-2 mb-5">
					<h1 className="text-danger mt-4 ms-3">Characters</h1>
					<div className="row scroll ">
						{store.characters.map((people) => (
							<CardSimple key={people.result._id} item={people} type={"characters"} />
						))}
					</div>
				</div>
			</div>
			<div className="row mx-5 mt-2 mb-5">
				<h1 className="text-danger mt-4 ms-3">Planets</h1>
				<div className="row scroll">
					{store.planets.map((planet) => (
						<CardSimple key={planet.result._id} item={planet} type={"planets"} />
					))}
				</div>
			</div>
		</>
	);

};

export default Home;