import React from "react";
import luke from "../../img/luke.jpg"
import "../../styles/index.css";

export const Detail = () => {
    return(
        <div class="container">
        <div class="row g-4">
          <div class="col-md-6">
          <div class="left">
             <img class="w-100 p-3" src={luke}/>
        </div>     
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">Luke Skywalker</h5>
              <p class="card-text">La vida de Luke Skywalker escrita como prueba de estructura</p>
             
            </div>
            
            
          </div>
          <div><hr className="redBar"/></div>
          <div class="d-flex bd-highlight red">
  <div class="p-2 flex-fill bd-highlight">
    <p><strong>Name</strong></p>
    <p>Luke Skywalker</p></div>
  <div class="p-2 flex-fill bd-highlight">
    <p><strong>Birth Year</strong></p>
    <p>19BBY</p></div>
  <div class="p-2 flex-fill bd-highlight">
    <p><strong>Gender</strong></p>
    <p>male</p></div>
  <div class="p-2 flex-fill bd-highlight">
    <p><strong>Height</strong></p>
    <p>172</p></div>
  <div class="p-2 flex-fill bd-highlight">
    <p><strong>Skin Color</strong></p>
  <p>fair</p></div>
  <div class="p-2 flex-fill bd-highlight">
    <p><strong>Eye Color</strong></p>
  <p>blue</p></div>
</div>
        </div>
      </div>
    );
};

