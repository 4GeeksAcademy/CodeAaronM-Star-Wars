import React from "react";
import PropTypes from "prop-types";

const CardPlanets = (props) => {
    return (
        <div className="card planets">
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.planetName}</h5>
                <p className="card-text">
                   <p>Population: {props.population}</p>
                   <p>Terrain: {props.terrain}</p>
                </p>
                <a href="#" className="btn btn-primary">Learn more</a>
                <i class="fas fa-heart"></i>
            </div>
        </div>
    )
}

CardPlanets.propTypes = {
    population: PropTypes.string,
    img: PropTypes.string,
    terrain: PropTypes.string,
    planetName: PropTypes.string,
  };

export default CardPlanets