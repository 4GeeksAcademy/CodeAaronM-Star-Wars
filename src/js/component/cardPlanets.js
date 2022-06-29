import React , {useState,useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanets = (props) => {
  const { store, actions } = useContext(Context);
  const [check, setCheck] = useState([sessionStorage.getItem(props.planetName)]);
  const api = store.api

  const handleAdd = () => {
    //actions.favorites(1, props.item_id, props.planetName, "Planets");
    actions.favorites(1, props.item_id, props.planetName, 2, api)
    actions.lookFavorite(props.planetName)
    setCheck(props.planetName)
}
const handleRemove = (user_id, category, item_id, item_name, api) => {
    
    actions.deleteFavorite(user_id, category, item_id, item_name, api) //aquí necesito pintar el id unico de la relación para buscarla y borrarla (o quizás cambiar el endpoint para buscarla con otro dato?)
    actions.lookFavorite(item_name)
    
      setCheck()
  }


return (
    <div className="card m-2">
        <div className="card-body">
            <h5 className="card-title"> {props.planetName}</h5>
            <p className="card-text">Population: {props.population}</p>
            <p className="card-text">Terrain: {props.terrain}</p>
            <Link to={`/detail2/${props.item_id}`} className="btn btn-primary">Learn more</Link>
            {props.planetName == check  ? 
               (    <div>     
                        <i className="fas fa-heart deselect" onClick={() => handleRemove(1,2,props.item_id, props.planetName, api)}></i>
                     </div>
                            ) : (
                    <div >
                        <i className="fas fa-heart " onClick={() => handleAdd()}></i>
                    </div>
                            )}                     			
        </div>
    </div>
)
}


CardPlanets.propTypes = {
    //people_id: PropTypes.number,???
    population: PropTypes.string,
    terrain: PropTypes.string,
    planetName: PropTypes.string,
    item_id: PropTypes.number,
  };


  
export default CardPlanets