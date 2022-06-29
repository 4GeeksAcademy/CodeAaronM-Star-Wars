import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardCharacter = (props) => {
    const {  store, actions } = useContext(Context);
    const [check, setCheck] = useState(sessionStorage.getItem(props.characterName))
    const api = store.api

    const handleAdd = () => {
        //actions.favorites(1, props.item_id, props.characterName, "People");
        actions.favorites(1, props.item_id, props.characterName, 1, api)
        actions.lookFavorite(props.characterName)
        setCheck(props.characterName)
    }
    const handleRemove = (user_id, category, item_id, item_name, api) => {
        
        actions.deleteFavorite(user_id, category, item_id, item_name, api) //aquí necesito pintar el id unico de la relación para buscarla y borrarla (o quizás cambiar el endpoint para buscarla con otro dato?)
        actions.lookFavorite(item_name)
        
          setCheck()
      }


    return (
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title"> {props.characterName}</h5>
                   <p className="card-text">Gender: {props.gender}</p>
                   <p className="card-text">Hair-Color: {props.hair}</p>
                   <p className="card-text">Eye-Color: {props.eye}</p>
                <Link to={`/detail1/${props.item_id}`} className="btn btn-primary">Learn more</Link>
                {props.characterName == check  ? 
                   (    <div>     
                            <i className="fas fa-heart deselect" onClick={() => handleRemove(1,1,props.item_id, props.characterName, api)}></i>
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


CardCharacter.propTypes = {
    people_id: PropTypes.number,
    gender: PropTypes.string,
    hair: PropTypes.string,
    eye: PropTypes.string,
    characterName: PropTypes.string,
    item_id: PropTypes.number,
  };

export default CardCharacter