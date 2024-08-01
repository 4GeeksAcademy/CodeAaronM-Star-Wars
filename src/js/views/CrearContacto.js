import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function CrearContacto() {
  const [datosForm, setDatosForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://playground.4geeks.com/contact/agendas/Fullstackers/contacts`,
        datosForm
      );
      console.log("Usuario registrado:", response.data);
    } catch (error) {
      console.error("Error registrando el nuevo contacto:", error);
    }

    setDatosForm({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <div>
      <h1>Crear Contacto</h1>
      <div className="mx-5">
        <form onSubmit={handleSubmit} className="">
          {[
            { id: "name", label: "Nombre", type: "text" },
            { id: "address", label: "Dirección del contacto", type: "text" },
            { id: "phone", label: "Número de teléfono", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((field) => (
            <div className="form-group m-3" key={field.id}>
              <label htmlFor={field.id} className="form-label">
                {field.label}
              </label>
              <input
                type={field.type}
                className="form-control"
                id={field.id}
                name={field.id}
                value={datosForm[field.id]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div className="container-fluid m-0 rounded-bottom bg-secondary-subtle d-flex justify-content-end">
            <button type="submit" className="btn btn-success my-3">
              Crear Nuevo Contacto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrearContacto;
