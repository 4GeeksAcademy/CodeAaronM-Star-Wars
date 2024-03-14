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

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [singleContact, setSingleContact] = useState({});
  const navigate = useNavigate();

  // traer los datos del id en el que se hace click en caso de que no sea undefined
  const getIndividualContact = () => {
    if (params) {
      fetch(`https://playground.4geeks.com/apis/fake/contact/${params.theid}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSingleContact(data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Invalid ID provided", params.theid);
    }
  };

  useEffect(() => {
    getIndividualContact();
  }, []);

  const handleDeleteContact = async () => {
    try {
      await actions.deleteContact(singleContact.id);
      navigate(`/demo`);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

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
              <h5 className="card-title">{singleContact.full_name}</h5>
              <p className="card-text">
                <IoLocationSharp />
                {singleContact.address}
              </p>
              <p className="card-text">
                <FaPhoneFlip />
                {singleContact.phone}
              </p>
              <p className="card-text">
                <FaEnvelope />
                {singleContact.email}
              </p>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-around">
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
                        handleDeleteContact(singleContact.id);
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
