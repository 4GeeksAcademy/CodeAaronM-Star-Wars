import React , {useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "./navbar";

const FavoritePeople= (props) => {
  const { store, actions } = useContext(Context);
  const[name, setName] = useState([""]);
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
		  });
	  }

    useEffect(() => {
      Character(id);
      }, []);


  
    return (
        <div className="card m-2">
				{props.id}
		
                <Link to={`/detailpeople/${props.people_id}`}>{name}</Link>
                <i className="fas fa-trash" onClick={() => actions.deletePeople(props.id,name)}></i>
        </div>
    )
}

FavoritePeople.propTypes = {
    user_id: PropTypes.string,
    img: PropTypes.string,
    planet_id: PropTypes.string,
    people_id: PropTypes.string,
    planetName: PropTypes.string,
    name: PropTypes.string,
	id: PropTypes.string,
  };

export default FavoritePeople