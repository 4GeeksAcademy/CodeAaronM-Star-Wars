import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Cardcharacter = (props) => (
<>

<div className="card m-2" style={{width: "18rem"}}>
  <img src={rigoImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text m-0">Gender:{props.gender}</p>
    <p className="card-text m-0">Hair color:{props.hairColor}</p>
    <p className="card-text m-0">Eye color:{props.eyeColor}</p>
    <Link to={"/Characters/" + props.index}>
    <button className="btn btn-primary" onClick={()=>charDescription()}>Learn more</button>
			</Link>
  </div>
</div>

</>
);
