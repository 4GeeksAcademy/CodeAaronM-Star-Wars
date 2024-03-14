import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
//import image
import profPic from "../../img/icon-256x256.png";

//importing icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const handleDeleteContact = async () => {
    try {
      await actions.deleteContact(singleContact.id);
      navigate(`/demo`);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="card col-md-12 d-flex">
      <article className="col-md-11" key={contact.id}>
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
              <h5 className="card-title">{contact.full_name}</h5>
              <p className="card-text">
                <IoLocationSharp />
                {contact.address}
              </p>
              <p className="card-text">
                <FaPhoneFlip />
                {contact.phone}
              </p>
              <p className="card-text">
                <FaEnvelope />
                {contact.email}
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="col-md-1 d-flex align-items-center justify-content-end">
        <div className="d-flex">
          <button
            className="btn"
            onClick={() => navigate(`/editContact/${params.theid}`)}
          >
            <FaPencilAlt />
          </button>

          <button
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <FaTrash />
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Do you want to delete the contact?
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    handleDeleteContact(contact.id);
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ContactCard;
