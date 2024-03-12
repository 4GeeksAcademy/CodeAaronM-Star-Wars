import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import profPic from "../../img/icon-256x256.png";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getContatcsList();
  }, []);

  return (
    <div className="container">
      <div className="list-group">
        {store.contactList.map((contact) => {
          return (
            <section
              id={contact.id}
              key={contact.id}
              className="list-group-item d-flex justify-content-between m-2"
              onClick={() => navigate(`/single/${contact.id}`)}
            >
              <img src={profPic} className="w-25" />
              <p>
                <strong>{contact.full_name}</strong>
              </p>
              <p>
                <i>{contact.email}</i>
              </p>
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
