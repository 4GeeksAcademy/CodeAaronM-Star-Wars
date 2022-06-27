import React , {useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanets = (props) => {
  const { store, actions } = useContext(Context);

  
    return (
        <div className="card m-2">
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.planetName}</h5>
                   <p className="card-text">Population: {props.population}</p>
                   <p className="card-text">Terrain: {props.terrain}</p>
                <Link to={`/detailplanets/${props.id}`} className="btn btn-primary">Learn more</Link>
                {/*<i className="fas fa-heart" onClick={() => actions.favoritePlanet(props.planetName, props.uid,"planets")}></i>*/}
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