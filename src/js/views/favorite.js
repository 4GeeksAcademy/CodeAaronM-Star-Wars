import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const Favorite = (props) => {
    const {  store, actions } = useContext(Context);
    

    return (
        <div className="">
                <Link to={`/detailpeople/${props.id}`}>Name{props.id}</Link>
                <i className="fas fa-heart" onClick={() => actions.favoritePeople(props.characterName, props.uid, "people")}></i>
        </div>
    )
}


Favorite.propTypes = {

    id: PropTypes.string,
    a: PropTypes.string,

  };

export default Favorite