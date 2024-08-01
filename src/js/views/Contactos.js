import React, { useEffect, useState } from "react";
import axios from "axios";

function Contactos() {
  const [contactos, setContactos] = useState([]);

  const getContacts = async () => {
    try {
      const response = await axios.get(
        "https://playground.4geeks.com/contact/agendas/Fullstackers"
      );
      setContactos(response.data.contacts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <h1>Contactos</h1>
      <div>
        {contactos.length > 0 ? (
          contactos.map((contacto) => (
            <div key={contacto.id} className="m-3">
              <p>Nombre: {contacto.name}</p>
              <p>Teléfono: {contacto.phone}</p>
              <p>Email: {contacto.email}</p>
              <p>Dirección: {contacto.address}</p>
            </div>
          ))
        ) : (
          <p>No hay contactos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Contactos;
