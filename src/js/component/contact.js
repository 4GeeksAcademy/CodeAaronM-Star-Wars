import React, { useState } from "react";

export const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true); // Show success message after form submission
  };

  return (
    <div className="pt-5" id="Contactos">
      <form onSubmit={handleSubmit} action="https://formsubmit.co/josea.tovarp.blue7@gmail.com" method="POST" className="pt-4">
        <div className="d-flex justify-content-center">
          <div className="card1 mb-3 justify-content-center" style={{ width: "30rem", height: "30rem" }}>
            <div className="card-header mb-3">
              <h3>Contáctanos</h3>
            </div>
            <div className="card-body">
              <div className="form-floating mb-3">
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Nombre y Apellido"
                  style={{ width: "100%" }}
                />
                <label htmlFor="floatingInput" style={{ color: "gray" }}>
                  Nombre y Apellido
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="phone"
                  name="phone"
                  className="form-control"
                  id="floatingInput"
                  placeholder="phone"
                  style={{ width: "100%" }}
                />
                <label htmlFor="floatingInput" style={{ color: "gray" }}>
                  Telefono
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="email"
                  style={{ width: "100%" }}
                />
                <label htmlFor="floatingInput" style={{ color: "gray" }}>
                  Correo electronico
                </label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  type="message"
                  name="message"
                  className="form-control"
                  id="floatingInput"
                  placeholder="message"
                  style={{ width: "100%", height: "10rem" }}
                />
                <label htmlFor="floatingInput" style={{ color: "gray" }}>
                  Mensaje
                </label>
              </div>
              <input type="submit" value="Enviar" className="btn btn-primary" id="submitButton" />
              {showSuccessMessage && ( // Conditionally render success message
                <div id="successMessage">
                  <p>
                    Agradecemos su interés en comunicarse con nosotros. Su consulta será atendida a la brevedad, en un plazo máximo de 24 horas.
                  </p>
                </div>
              )}
              <input type="hidden" name="_next" value="https://financity-vert.vercel.app/" />
              <input type="hidden" name="_captcha" value="false" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
