// src/js/components/Contacts.js
import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/flux.js';  // Verifica la ruta del contexto
import { Link } from 'react-router-dom';

const Contacts = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Contacts List</h2>
      <div className="list-group">
        {store.contacts.map((contact) => (
          <div className="list-group-item d-flex justify-content-between align-items-center" key={contact.id}>
            <div className="d-flex align-items-center">
              <img src={`https://via.placeholder.com/50?text=${contact.name.charAt(0)}`} alt={contact.name} className="rounded-circle me-3" />
              <div>
                <h5>{contact.name}</h5>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.address}</p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => actions.removeContact(contact.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <Link to="/" className="btn btn-secondary mt-3">Add New Contact</Link>
    </div>
  );
};

export default Contacts;
