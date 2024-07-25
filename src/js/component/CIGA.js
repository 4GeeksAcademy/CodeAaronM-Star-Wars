import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/cards.css";

import {
  faSackDollar,
  faHandHoldingDollar,
  faMoneyBillTrendUp,
  faWallet,
  faPiggyBank,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

export const CIGA = () => {
  return (
    <div className="Services pt-5 mb-4 mt-5">
      <div className="Card">
        <div
          className="card text-center mb-3"
          // style={{
          //   width: "18rem",
          //   background: " rgba(130, 226, 255, 0.582)",
          //   backdropFilter: "blur(5px)",
          // }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faSackDollar}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Capital
              </h5>
              {/* <p className="card-text">
                El capital es el conjunto de recursos financieros o activos que
                posee una persona, empresa o institución.
              </p> */}
              <div className="d-flex justify-content-center pt-1 pb-1">
                <a href="#" className="btn btn-outline-dark">
                  saber mas
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          // style={{
          //   width: "18rem",
          //   background: " rgba(243, 255, 130, 0.582)",
          //   backdropFilter: "blur(5px)",
          // }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faMoneyBillTrendUp}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Inversion
              </h5>
              {/* <p className="card-text">
                La inversión es el proceso de dedicar capital a un activo con la
                expectativa de obtener un rendimiento a futuro.
              </p> */}
              <div className="d-flex justify-content-center pt-1 pb-1">
                <a href="#" className="btn btn-outline-dark">
                  saber mas
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          // style={{
          //   width: "18rem",
          //   background: "  rgba(255, 201, 130, 0.582)",
          //   backdropFilter: "blur(5px)",
          // }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Gastos
              </h5>
              {/* <p className="card-text">
                El ahorro es la práctica de reservar una parte de los ingresos
                para su uso futuro.
              </p> */}
              <div className="d-flex justify-content-center pt-1 pb-1">
                <a href="#" className="btn btn-outline-dark">
                  saber mas
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          // style={{
          //   width: "18rem",
          //   background: "  rgba(243, 255, 130, 0.582)",
          //   backdropFilter: "blur(5px)",
          // }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faWallet}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Ahorro
              </h5>
              {/* <p className="card-text">
                El ahorro es la práctica de reservar una parte de los ingresos
                para su uso futuro.
              </p> */}
              <div className="d-flex justify-content-center pt-1 pb-1">
                <a href="#" className="btn btn-outline-dark">
                  saber mas
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          // style={{
          //   width: "18rem",
          //   background: " rgba(255, 201, 130, 0.582)",
          //   backdropFilter: "blur(5px)",
          // }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faPiggyBank}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Plan de Ahorro
              </h5>
              {/* <p className="card-text">
                Es una estrategia financiera que te permite reservar una parte
                de tus ingresos de manera regular para alcanzar objetivos
                específicos en el futuro.
              </p> */}
              <div className="d-flex justify-content-center pt-1 pb-1">
                <a href="#" className="btn btn-outline-dark">
                  saber mas
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card text-center mb-3"
          // style={{
          //   width: "18rem",
          //   background: " rgba(130, 226, 255, 0.582)",
          //   backdropFilter: "blur(5px)",
          // }}
        >
          <div className="card-body">
            <div>
              <FontAwesomeIcon
                icon={faClipboard}
                style={{ width: "3.8rem", height: "3.8rem" }}
              />
            </div>
            <div className="contenido">
              <h5 className="card-title pt-2 d-flex justify-content-center">
                Presupuesto
              </h5>
              {/* <p className="card-text">
                Es una herramienta de planificación financiera que te permite
                organizar tus ingresos y gastos durante un período determinado
                con el objetivo de alcanzar tus metas financieras.
              </p> */}
              <div className="d-flex justify-content-center pt-1 pb-1">
                <a href="#" className="btn btn-outline-dark">
                  saber mas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
