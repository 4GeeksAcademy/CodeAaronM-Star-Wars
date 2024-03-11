import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

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
              <img src={contact.image} />
              <span>
                <strong>{contact.full_name}</strong>
              </span>
              <span>
                <i>{contact.email}</i>
              </span>
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
