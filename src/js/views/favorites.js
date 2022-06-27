import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const Favorite = (props) => {
    const {  store, actions } = useContext(Context);
    

    return (
        <div className="">
                <Link to={`/detailpeople/${props.id}`}>Nameooooo{props.id}</Link>
                <i className="fas fa-heart" onClick={() => actions.favoritePeople(props.user_id, props.people_id)}></i>
        </div>
    )
}


Favorite.propTypes = {

    id: PropTypes.string,
    user_id: PropTypes.string,
    planet_id: PropTypes.string,
    people_id: PropTypes.string,
    planetName: PropTypes.string,
    name: PropTypes.string,

  };

export default Favorite