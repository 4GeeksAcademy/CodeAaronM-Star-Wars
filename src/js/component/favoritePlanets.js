import React , {useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const FavoritePlanets= (props) => {
  const { store, actions } = useContext(Context);
  const[name, setName] = useState([""]);
  const id = props.planet_id 

	function Planet(id) {

		console.log("loading character");
		fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/planets/"+id, {
		  method: "GET",
		  headers: {
			"Content-Type": "application/json",
		  },
		})
		.then(response => {
			var contentType = response.headers.get("content-type");
			if(contentType && contentType.includes("application/json")) {
			  return response.json();
			}
			throw new TypeError("API error");
		  })
		.then((data) => {
		setName(data.name)
			//this.setState({ totalReactPackages: data.total })
		  });
	  }

    useEffect(() => {
      Planet(id);
      }, []);

	  //useEffect(() => {
	//	actions.getUser();
	 // }, [store.name]);
	  //console.log(store.name);
  
    return (
        <div className="m-2 row">
			<div className="col-7"><Link to={`/detailplanets/${props.planet_id}`}>{name}</Link></div>
			<div className="col-5 text-end"><i className="fas fa-trash" onClick={() => actions.deletePlanet(props.id,name)}></i>
</div>
        </div>
    )
}

FavoritePlanets.propTypes = {
    user_id: PropTypes.number,
    planet_id: PropTypes.number,
    name: PropTypes.string,
	id: PropTypes.number,
  };

export default FavoritePlanets