import React from "react";
import "../../styles/question.css"

export const Questions = () => {
  return (
    <div className="Question container-fluid pt-4 " id="Questions">
      <h2 className="titulo-funda">
        <span style={{ color: "#0066CC" }}>Pre</span>
        <span style={{ color: "#0099FF" }}>gu</span>
        <span style={{ color: "#FFCC00" }}>nt</span>
        <span style={{ color: "#FF9933" }}>as </span>
        <span>&nbsp;</span> <span style={{ color: "#0066CC" }}>fre</span>
        <span style={{ color: "#0066CC" }}>cu</span>
        <span style={{ color: "#0099FF" }}>en</span>
        <span style={{ color: "#FFCC00" }}>te</span>
        <span style={{ color: "#FF9933" }}>s</span>
      </h2>

      <div className="question container row d-flex pt-2"
           
      >
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/foto-gratis/amigos-sonrientes-abrazandose-parque-infantil_1098-3847.jpg?w=740&t=st=1721893182~exp=1721893782~hmac=f92a71ebb1b3147b665aa8a85058b9ab8f1bc8a06f13de089bdd8e2e52ee7485"
            className="img-fundation img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="accordion accordion-flush col-md-6" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
               hola
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                hola 2
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                hola 3
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
