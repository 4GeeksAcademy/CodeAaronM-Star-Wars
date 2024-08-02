// src/js/components/Home.js
import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../store/flux.js';  // Verifica la ruta del contexto
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { ...form, id: Date.now() };
    actions.addContact(newContact);
    navigate('/contacts');
  };

  return (
    <div className="card compact-card">
      <div className="card-body">
        <h2 className="text-center mb-4">Add Contact</h2>
        <form onSubmit={handleSubmit}>
          {['name', 'email', 'phone', 'address'].map((field) => (
            <div className="input-group mb-2" key={field}>
              <span className="input-group-text">{field.charAt(0).toUpperCase() + field.slice(1)}</span>
              <input
                type="text"
                className="form-control"
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder=""
                aria-label={field}
              />
            </div>
          ))}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
