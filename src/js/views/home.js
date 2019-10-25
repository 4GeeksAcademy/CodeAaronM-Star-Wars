import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const {
		state: { store, actions },
		setState
	} = useContext(Context);
	console.log("HOME", store);
	return (
		<div className="text-center mt-5">
			<h1>{store && store.contacts}</h1>
			<div className="btn btn-secondary" onClick={() => console.log("HOME", store)}>
				Click to console.log the useContext store from Home Page
			</div>
			<div className="py-1" />
			<div className="btn btn-success" onClick={actions.log}>
				Click to console.log getStore() from Flux
			</div>
			<div className="py-1" />
			<div
				className="btn btn-info"
				onClick={() => setState({ store: { ...store, newKey: "existence" }, actions })}>
				Click to setState from Home Page
			</div>
		</div>
	);
};
