import React from "react";

const Characters=()=>{
        return (
            <>
            <div className="row m-5 p-4 ">
            <div className="col-6 text-center">
        <img src="https://starwars-visualguide.com/assets/img/characters/2.jpg" style ={{width:15 +'rem'}}/>
        </div>
        <div className="col-6 text-start">
            <h2>Characters</h2>
            <p>descricion completa del planeta</p>
        
        </div>
        </div>
        <div className="row text-danger p-4 border-top border-danger m-4">
        <div className="col text-center">
                <h4>Name</h4>
                <h5>1111</h5>
            </div>
                    <div className="col text-center ">
                <h4>Birth Year</h4>
                <h5>1111</h5>
            </div>
            <div className="col text-center">
                <h4>Gender</h4>
                <h5>1111</h5>
            </div>
            <div className="col text-center">
                <h4>Height</h4>
                <h5>1111</h5>
            </div>
            <div className="col text-center">
                <h4>Skin Color</h4>
                <h5>111</h5>
            </div>
            <div className="col text-center">
                <h4>Eye Color</h4>
                <h5>1111</h5>
            </div>
         </div>
         </>
    );
};

export default Characters;