import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = (props) => {

    console.log(props);
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                   <p>Gender: {props.gender}</p>
                   <p>Hair-Color: {props.hair}</p>
                   <p>Eye-Color: {props.eye}</p>
                </p>
                <Link to={`/detail/${props.uid}`} className="btn btn-primary">Learn more</Link>
                <i class="fas fa-heart"></i>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    gender: PropTypes.string,
    hair: PropTypes.string,
    eye: PropTypes.string,
  };

export default Card