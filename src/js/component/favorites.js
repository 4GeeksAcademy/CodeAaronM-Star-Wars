import React , {useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Favorites= (props) => {
  const { store, actions } = useContext(Context);
    return (
        <div className="m-2 row">
			    <div className="col-9">
            <Link to={`/detail${props.category}/${props.item_id}`}>{props.item_name}</Link>
          </div>
			    <div className="col-3 text-end"> 
            <i className="fas fa-trash" onClick={() => actions.deleteFavorite(props.id)}></i>
          </div>
        </div>
    )
}

Favorites.propTypes = {
    user_id: PropTypes.number,
    item_name: PropTypes.string,
    planet_id: PropTypes.number,
    people_id: PropTypes.number,
    planetName: PropTypes.string,
    name: PropTypes.string,
	  id: PropTypes.number,
  };

export default Favorites