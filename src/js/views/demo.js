import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import ContactCard from "../component/contactCard.jsx";

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
          return <ContactCard contact={contact} key={contact.id} />;
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
