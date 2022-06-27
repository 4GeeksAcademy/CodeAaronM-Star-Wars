import React , {useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ItemFavorite= (props) => {
  const { store, actions } = useContext(Context);
  const[name, setName] = useState([""]);
	console.log("name is " + name)
  const id = props.people_id 

	function Character(id) {

		console.log("loading character");
		fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/people/"+id, {
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
      Character(id);
      }, []);


  
    return (
        <div className="card m-2">
                <Link to={`/detailpeople/${props.people_id}`}>{name}</Link>
                {/*<i className="fas fa-heart" onClick={() => actions.favoritePlanet(props.planetName, props.uid,"planets")}></i>*/}
        </div>
    )
}

ItemFavorite.propTypes = {
    user_id: PropTypes.string,
    img: PropTypes.string,
    planet_id: PropTypes.string,
    people_id: PropTypes.string,
    planetName: PropTypes.string,
    name: PropTypes.string,
  };

export default ItemFavorite