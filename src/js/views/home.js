import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("HOME", store);
	return (
		<div className="text-center mt-5">
			<h1>{store && store.contacts}</h1>
			<div className="btn btn-success" onClick={actions.log}>
				Click to console.log getStore() from flux
			</div>
		</div>
	);
};
