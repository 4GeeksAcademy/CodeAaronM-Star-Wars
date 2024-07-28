import React from "react";
import "../../styles/MV.css";

export const MV = () => {
  return (
    <div className="MV d-flex container-fluid pt-5" id="MV">
      <div className="card-mv1 mb-3 pt-2
      " style={{ maxWidth: 1000 }}>
        <div className="row g-0">
          <div className="container-fluid">
            <div>
              <h2 className="titulo-mv">
                <span style={{ color: "#0066CC" }}>Mi</span>
                <span style={{ color: "#0099FF" }}>s</span>
                <span style={{ color: "#FFCC00" }}>i</span>
                <span style={{ color: "#FF9933" }}>ó</span>
                <span style={{ color: "#0066CC" }}>n</span>
              </h2>
              <p className="p-mv">
                Sensibilizar a las futuras generaciones con las habilidades
                necesarias para tomar decisiones financieras responsables.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-mv2 mb-3 p-2" style={{ maxWidth: 1000 }}>
        <div className="row g-0">
          <div className="container-fluid">
            <div>
              <h2 className="titulo-mv">
                <span style={{ color: "#0066CC" }}>Vi</span>
                <span style={{ color: "#0099FF" }}>s</span>
                <span style={{ color: "#FFCC00" }}>i</span>
                <span style={{ color: "#FF9933" }}>ó</span>
                <span style={{ color: "#0066CC" }}>n</span>
              </h2>
              <p className="p-mv">
                Fomentar la consciencia financiera en niños, niñas y
                adolescentes, empoderándolos para la toma de decisiones
                financieras responsables desde temprana edad, que beneficien su
                desarrollo como ciudadanos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
