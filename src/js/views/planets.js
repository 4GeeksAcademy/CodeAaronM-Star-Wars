import React from "react";

const Planets=()=>{
    return (
        <>
        <div className="row m-5 ">
        <div className="col-6 text-center">
    <img src="https://starwars-visualguide.com/assets/img/planets/3.jpg" style ={{width:25 +'rem'}}/>
    </div>
    <div className="col-6 text-start">
        <h2>Planeta</h2>
        <p>descricion completa del planeta</p>
    
    </div>
    </div>
    <div className="row text-danger p-5 border-top border-danger m-5">
    <div className="col-2 text-center">
            <h4>Name</h4>
            <h5>1111</h5>
        </div>
                <div className="col-2 text-center">
            <h4>Climate</h4>
            <h5>1111</h5>
        </div>
        <div className="col-2 text-center">
            <h4>Population</h4>
            <h5>1111</h5>
        </div>
        <div className="col-1 text-center">
            <h4>Orbital Period</h4>
            <h5>1111</h5>
        </div>
        <div className="col-2 text-center">
            <h4>Rotation Period</h4>
            <h5>111</h5>
        </div>
        <div className="col-2 text-center">
            <h4>Diameter</h4>
            <h5>1111</h5>
        </div>
     </div>
        </>
    )
}

export default Planets;