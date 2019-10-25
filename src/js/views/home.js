import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("home: ", store);
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			{store && store.demo.map((e, i) => <div key={i}>{e.title}</div>)}
			<div>{store && store.contacts}</div>
			<div className="btn btn-success" onClick={actions.log}>
				If you see this green button, bootstrap is working
			</div>
		</div>
	);
};
