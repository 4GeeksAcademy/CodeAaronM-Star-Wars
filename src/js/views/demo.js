import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import profPic from "../../img/icon-256x256.png";

//importing icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getContatcsList();
  }, [store.contactList]);

  return (
    <div className="container">
      <div className="list-group">
        {store.contactList.map((contact) => {
          return (
            <section
              id={contact.id}
              key={contact.id}
              className="list-group-item d-flex justify-content-between"
            >
              <div
                className="col-md-11 d-flex"
                onClick={() => navigate(`/single/${contact.id}`)}
              >
                <img src={profPic} className="w-25 me-5" />
                <div className="mt-4 ms-4">
                  <p>
                    <strong>{contact.full_name}</strong>
                  </p>
                  <p>
                    <IoLocationSharp className="me-3" />
                    <i>{contact.address}</i>
                  </p>
                  <p>
                    <FaPhoneFlip className="me-3" />
                    {contact.phone}
                  </p>
                  <p>
                    <FaEnvelope className="me-3" />
                    <i>{contact.email}</i>
                  </p>
                </div>
              </div>

              <div className="col-md-1 d-flex align-items-center justify-content-around">
                <button
                  className="btn"
                  onClick={() => navigate(`/editContact/${contact.id}`)}
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
            </section>
          );
        })}
      </div>
      <section className="d-flex justify-content-between m-4">
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
        <Link to="/addContact">
          <button className="btn btn-primary">Add new Contact</button>
        </Link>
      </section>
    </div>
  );
};
