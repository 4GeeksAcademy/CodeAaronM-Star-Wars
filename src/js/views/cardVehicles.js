import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

const CardVehicles = (props) => {
    // const [info, setInfo] = useState({})
    // useEffect(() => {
    //     fetch("https://www.swapi.tech/api/vehicles/" + props.vehicles.uid)
	// 				.then(res => res.json())
	// 				.then(data => { console.log(data);
	// 				setInfo( data.result.properties );
	// 				})
	// 				.catch(error => console.log(error));
    // },[])

    return (
        <div className="card">
            <img className="card-img-top" src="https://dummyimage.com/400x200/cccccc/ffffff.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.vehicles.name}</h5>
                <div className="card-text">
                   <p>Model: {props.vehicles.model}</p>
                   <p>Manufacturer: {props.vehicles.manufacturer}</p>
                  
                </div>
                <a href="#" className="btn btn-primary">Learn more</a>
                <i className="fas fa-heart"></i>
            </div>
        </div>
    )
}

CardVehicles.propTypes = {
    vehicles: propTypes.any,
  };

export default CardVehicles