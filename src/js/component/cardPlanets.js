import React , {useState,useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanets = (props) => {
  const { store, actions } = useContext(Context);
  const [test, setTest] = useState("");
  const [star, setStar] = useState([sessionStorage.getItem(props.planetName)]);
  

  
    return (
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title">{props.planetName}</h5>
                   <p className="card-text">Population: {props.population}</p>
                   <p className="card-text">Terrain: {props.terrain}</p>
                <Link to={`/detailplanets/${props.id}`} className="btn btn-primary">Learn more</Link>
                {star != null && star != "" && star != " " && test == "" ? (  <div>{<i className="fas fa-heart deselect" onClick={() => actions.deleteFavorite(star, props.planetName) && setStar("")}></i>}</div>
          ) : (<div>{<i className="fas fa-heart"  onClick={() => actions.favorites(1, props.id, props.planetName, "Planets") && setTest("deactivate")}></i>}</div>
          )}
            </div>
        </div>

    )
}

CardPlanets.propTypes = {
    population: PropTypes.string,
    terrain: PropTypes.string,
    planetName: PropTypes.string,
  };


  
export default CardPlanets