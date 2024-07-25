import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faHandshake,
  faScaleBalanced,
  faChartLine,
  faGraduationCap,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { faGem, faLightbulb} from "@fortawesome/free-regular-svg-icons";
import "../../styles/valores.css";

export const Valores = () => {
  return (
    <div className="Valores pt-5">
      <h3 className="Titulo-Valores">
      <span style={{ color: "#0066CC" }}>Va</span>
        <span style={{ color: "#0099FF" }}>l</span>
        <span style={{ color: "#FFCC00" }}>o</span>
        <span style={{ color: "#FF9933" }}>re</span>
        <span style={{ color: "#0066CC" }}>s</span>
      </h3>
      <div className="Card">
        <div
          className="card text-center mb-3"
          style={{
            width: "18rem",
            background: " rgba(130, 226, 255, 0.582)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faGraduationCap}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Educación:
              </h5>
              <p className="card-text">
                La educación financiera es el pilar fundamental de su labor.
                Buscan transmitir conocimientos y habilidades financieras de
                manera clara y accesible.
              </p>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          style={{
            width: "18rem",
            background: " rgba(243, 255, 130, 0.582)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faRocket}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Empoderamiento
              </h5>
              <p className="card-text">
                Financity busca empoderar a los jóvenes para que tomen
                decisiones financieras informadas y responsables desde temprana
                edad.
              </p>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          style={{
            width: "18rem",
            background: "  rgba(255, 201, 130, 0.582)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faHandshake}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Solidaridad
              </h5>
              <p className="card-text">
                Fomentan la solidaridad y la cooperación entre los jóvenes,
                promoviendo valores como el trabajo en equipo y el apoyo mutuo.
              </p>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          style={{
            width: "18rem",
            background: "  rgba(243, 255, 130, 0.582)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faScaleBalanced}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Responsabilidad
              </h5>
              <p className="card-text">
                Enseñan a los jóvenes a ser responsables con su dinero y a tomar
                decisiones que tengan un impacto positivo en su futuro.
              </p>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          style={{
            width: "18rem",
            background: " rgba(255, 201, 130, 0.582)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faGem}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Honestidad
              </h5>
              <p className="card-text">
                Promueven la honestidad y la transparencia en todas las
                transacciones financieras.
              </p>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          style={{
            width: "18rem",
            background: " rgba(130, 226, 255, 0.582)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faChartLine}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Futuro
              </h5>
              <p className="card-text">
                Se enfocan en construir un futuro financiero más sólido para las
                próximas generaciones.
              </p>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          style={{
            width: "18rem",
            background: " rgba(130, 226, 255, 0.582)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faLightbulb}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Innovación:
              </h5>
              <p className="card-text">
                Están constantemente buscando nuevas formas de enseñar y
                aprender sobre finanzas, utilizando las últimas tecnologías y
                metodologías.
              </p>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          style={{
            width: "18rem",
            background: " rgba(130, 226, 255, 0.582)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Inclusión:
              </h5>
              <p className="card-text">
                Buscan llegar a todos los jóvenes, independientemente de su
                origen social o económico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
