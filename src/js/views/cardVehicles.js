import React, { useContext  } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardVehicles = (props) => {
    const { actions } = useContext(Context);

    return (
        <div className="card vehicles">
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title"> {props.vehicleName}</h5>
                <p className="card-text">
                   <p>Model: {props.model}</p>
                   <p>Manufacturer: {props.manufacturer}</p>
                </p>
                <Link to={`/detailVehicle/${props.uid}`} className="btn btn-primary">Learn more</Link>
                <i className="fas fa-heart" onClick={() => actions.favoriteVehicle(props.vehicleName, props.uid)}></i>
            </div>
        </div>
    )
}


CardVehicles.propTypes = {
    img: PropTypes.string,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
    vehicleName: PropTypes.string,
  };

export default CardVehicles