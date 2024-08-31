import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/starwars.png";
export const Characters = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
useEffect(()=>{
actions.getCharacterData(params.Characters_id)
},[])

	return (
		<>
		<div>
			<h1 className="display-4">This will show the demo element: {params.Characters_id}</h1>
		</div>

		<div className="card m-5">
  <div className="row g-0">
    <div className="col-md-4">
	<img className="img-fluid rounded-start" src={starwars} style={{height:"100px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{store.devCharacter.name}</h5>
        <p className="card-text">Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted  and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.
		</p>
      </div>
    </div>
  </div>
</div>
<div className="row">
<div className="col-2 text-center">
<h2 className="text-danger">Name</h2>
<h3 className="text-danger">{store.devCharacter.name}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">Birth Year</h2>
<h3 className="text-danger">{store.devCharacter.birth_year}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">Gender</h2>
<h3 className="text-danger">{store.devCharacter.gender}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">Height</h2>
<h3 className="text-danger">{store.devCharacter.height}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">Skin Color</h2>
<h3 className="text-danger">{store.devCharacter.skin_color}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">Eye Color</h2>
<h3 className="text-danger">{store.devCharacter.eye_color}</h3>
</div>
</div>
		</>
	);
};

Characters.propTypes = {
	match: PropTypes.object
};
