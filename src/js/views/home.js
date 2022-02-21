import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import trash from "../../img/trash.png"

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hola caraechola</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<p>
			<img src={trash} />
		</p>
	
	</div>
);
