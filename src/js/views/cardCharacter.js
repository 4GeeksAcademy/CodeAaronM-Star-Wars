import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const CardCharacter = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title"> {props.characterName}</h5>
                   <p className="card-text">Gender: {props.gender}</p>
                   <p className="card-text">Hair-Color: {props.hair}</p>
                   <p className="card-text">Eye-Color: {props.eye}</p>
                <Link to={`/detailpeople/${props.uid}`} className="btn btn-primary">Learn more</Link>
                {/*<i className="fas fa-heart" onClick={() => actions.favoritePeople(props.characterName, props.uid, "people")}></i>*/}
            </div>
        </div>
    )
}


CardCharacter.propTypes = {

    img: PropTypes.string,
    gender: PropTypes.string,
    hair: PropTypes.string,
    eye: PropTypes.string,
    characterName: PropTypes.string,
    uid: PropTypes.string,
  };

export default CardCharacter