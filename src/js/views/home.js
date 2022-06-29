import React, { useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter";
import CardPlanets from "../component/cardPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);

  function show() {
	if (store.characters == '' || store.planets =="") { 
		return (
	  
		  <div className="container flex text-center">
		  <h1>UPS!</h1>
		  <p>If you have time to reading this, may the Server it's not with you</p>
		  <img className="w-100 p-3" src="https://payload.cargocollective.com/1/4/144792/10818195/vaderlukeREVISE.gif"/>
		  </div>);
		
	  } else
	 {
		return (
		<div>
			<h4>Characters</h4>	
			<div className="card-group card-group-custom ">
			{store.people.map(item => 
				<CardCharacter 
				key = {item.id}
				characterName={item.name}
				gender={item.gender}
				hair={item.hair_color}
				eye={item.eye_color}
				item_id={item.id}
				className="card mx-3 p-2"
				/>
				)
			}
			</div>
			<br/>
			<h4>Planets</h4>	
			<div className="card-group">
			{store.planets.map(item => 
				<CardPlanets 
				key = {item.id}
				planetName={item.name}
				population={item.population}
				terrain={item.terrain}
				item_id={item.id}
				/>		
				)
			}
			</div>
			<br/>
		</div>	

);
};
}
return(
	<div className="container">
		  {show()}
	</div>
);
};

