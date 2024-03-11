import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import profPic from "../../img/icon-256x256.png";

//importing icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  // traer los datos del id en el que se hace click en caso de que no sea undefined
  useEffect(() => {
    actions.getIndividualContact(params.id);
  }, [params.id]);

  return (
    <div>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-3 px-3 py-2 d-flex align-items-center justify-content-around">
            <img
              src={profPic}
              className="img-fluid rounded-circle w-50"
              alt="user profile picture"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">
                {store.individualContact[params.id].full_name}
              </h5>
              <p className="card-text">
                <IoLocationSharp />
                {store.individualContact[params.id].address}
              </p>
              <p className="card-text">
                <FaPhoneFlip />
                {store.individualContact[params.id].phone}
              </p>
              <p className="card-text">
                <FaEnvelope />
                {store.individualContact[params.id].email}
              </p>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-around">
            <Link to="/editContact">
              <button className="btn">
                <FaPencilAlt />
              </button>
            </Link>
            <button className="btn">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
        <Link to="/demo">
          <button className="btn btn-primary">Contacts</button>
        </Link>
      </div>
    </div>
  );
};
