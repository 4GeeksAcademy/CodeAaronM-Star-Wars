import React, {useContext} from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Cardplanet = (props) =>{
    const { store, actions } = useContext(Context);
    return(
    <>
    
    <div className="card m-2" style={{width: "18rem"}}>
      <img src={rigoImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text m-0">population:{props.population}</p>
        <p className="card-text m-0">terrain:{props.terrain}</p>
        <Link to={"/Planets/" + props.index}>
        <button className="btn btn-primary">Learn more</button>
                </Link>
                <button type="button" className="btn btn-outline-warning" onClick={()=>actions.addfav(props.name)}><i className="fa-regular fa-heart"></i></button>
      </div>
    </div>
    
    </>
    );}

    
