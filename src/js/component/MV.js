import React from "react";
import "../../styles/MV.css";

export const MV = () => {
  return (
    <div className="MV d-flex container-fluid pt-5">
      <div className="card-mv1 mb-3 p-2" style={{ maxWidth: 1000 }}>
        <div className="row g-0">
          <div className="container-fluid">
            <div>
              <h2 className="titulo-mv">
                <span style={{ color: "#0066CC" }}>Mi</span>
                <span style={{ color: "#0099FF" }}>s</span>
                <span style={{ color: "#FFCC00" }}>i</span>
                <span style={{ color: "#FF9933" }}>o</span>
                <span style={{ color: "#0066CC" }}>n</span>
              </h2>
              <p className="p-mv">
                "Financity tiene como misión promover la educación financiera en
                niños y adolescentes, brindándoles las herramientas y
                conocimientos necesarios para tomar decisiones económicas
                informadas y responsables a lo largo de su vida. Buscamos
                fomentar una cultura financiera sólida en la sociedad y
                contribuir al bienestar económico de las futuras generaciones."
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
                <span style={{ color: "#FF9933" }}>o</span>
                <span style={{ color: "#0066CC" }}>n</span>
              </h2>
              <p className="p-mv">
                "Nuestra visión es convertirnos en la principal referencia en
                educación financiera para niños y adolescentes en el Pais.
                Queremos que todos los jóvenes tengan acceso a herramientas y
                recursos que les permitan alcanzar sus metas financieras y
                construir un futuro próspero."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
