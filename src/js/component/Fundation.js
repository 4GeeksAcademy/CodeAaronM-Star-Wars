import React from "react";
import "../../styles/fundation.css";

export const Fundation = () => {
  return (
    <div className="fundation pt-5" id="Conocenos">
      <h3 className="Titulo1 pt-3">
        <span style={{ color: "#0066CC" }}>¡Co</span>
        <span style={{ color: "#0099FF" }}>nó</span>
        <span style={{ color: "#FFCC00" }}>ce</span>
        <span style={{ color: "#FF9933" }}>no</span>
        <span style={{ color: "#0066CC" }}>s!</span>
      </h3>
      <div className="FUNDATION container-fluid d-flex justify-content-center">
        <div className="Imagenes d-flex col-md-3">
          <img
            src="https://img.freepik.com/foto-gratis/amigos-sonrientes-abrazandose-parque-infantil_1098-3847.jpg?w=740&t=st=1721893182~exp=1721893782~hmac=f92a71ebb1b3147b665aa8a85058b9ab8f1bc8a06f13de089bdd8e2e52ee7485"
            className="img-fundation img-fluid rounded-start"
            alt="..."
          />
          <img
            src="https://img.freepik.com/foto-gratis/nino-pequeno-manos-llenas-pintura-boca-abierta_1187-2875.jpg?w=740&t=st=1721893251~exp=1721893851~hmac=72d2731dcada1e9391814e41ba681125b4968d0ddbb6fb2649f7a452fa8db966"
            className="img-fundation img-fluid rounded-start pt-2"
            alt="..."
          />
        </div>
        <div className="card-Fundation mb-3" style={{ maxWidth: 800 }}>
          <div className="row g-0">
            <div className="container-fluid">
              <div className="card-fundation">
                <h2 className="titulo-funda">
                  <span style={{ color: "#0066CC" }}>Fi</span>
                  <span style={{ color: "#0099FF" }}>n</span>
                  <span style={{ color: "#FFCC00" }}>n</span>
                  <span style={{ color: "#FF9933" }}>a</span>
                  <span style={{ color: "#0066CC" }}>ncity</span>
                </h2>
                <p className="p-fun">
                  Es una organización sin fines de lucro con un propósito social
                  y estructura legal propia.
                </p>
                <ul className="ul-fun">
                  <li>
                    <b>Propósito:</b> Beneficiar al público en áreas como
                    educación, ciencia, cultura o medio ambiente.
                  </li>
                  <li>
                    <b>Patrimonio:</b> Recursos propios provenientes de
                    donaciones para cumplir sus objetivos.
                  </li>
                  <li>
                    <b>Personalidad jurídica:</b> Actúa de forma independiente y
                    celebra contratos.
                  </li>
                  <li>
                    <b>Sin fines de lucro:</b> Reinvierte sus excedentes en su
                    misión.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
