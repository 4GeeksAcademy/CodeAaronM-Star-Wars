import React , {useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const Favorites= (props) => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const api = store.api
  const handleRemove = (user_id, category, item_id, item_name, api) => {
    actions.deleteFavorite(user_id, category, item_id, item_name, api)
    history.push("/");
  }
  
    return (
        <div className="m-2 row">
			    <div className="col-9">
            <Link to={`/detail${props.category}/${props.item_id}`}>{props.item_name}</Link>
          </div>
			    <div className="col-3 text-end"> 
            <i className="fas fa-trash" onClick={() => handleRemove(props.user_id, props.category, props.item_id, props.item_name, api)}></i>
          </div>
        </div>
    )
}

Favorites.propTypes = {
    id: PropTypes.number,
    user_id: PropTypes.number,
    item_id: PropTypes.number,
    item_name: PropTypes.string,	  
  };

export default Favorites