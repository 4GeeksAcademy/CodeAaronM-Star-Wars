import React from "react";
import luke from "../../img/luke.jpg"

export const Detail = () => {
    return(
        <div class="container">
        <div class="row g-4">
          <div class="col-md-6 w-25 p-3">
          <div class="left">
             <img src={luke}/>
        </div>     
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">Luke Skywalker</h5>
              <p class="card-text">La vida de Luke Skywalker escrita como prueba de estructura</p>
             
            </div>
          </div>
        </div>
      </div>
    );
};

