import React from "react";
import "../../styles/presentacion.css";

export const Presentacion = () => {
  return (
    <div className="presentacion">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div
            className="Carousel2 carousel-item active"
            data-bs-interval={10000}
          >
            
            <img
              className="Imagen"
              src="https://img.freepik.com/foto-gratis/ninos-jugando-sobre-cesped_1098-504.jpg?t=st=1721877904~exp=1721881504~hmac=0bee64c64a932e0858ab47f289c0450239f714a53c06a830ad5f3c50c9a28bef&w=740"
              alt="..."
            />
            
            <div className="Contenido1 carousel-caption">
              <h2 className="Titulo1">
                <span style={{ color: "#0066CC" }}>Fi</span>
                <span style={{ color: "#0099FF" }}>n</span>
                <span style={{ color: "#FFCC00" }}>n</span>
                <span style={{ color: "#FF9933" }}>a</span>
                <span style={{ color: "#0066CC" }}>ncity</span>
              </h2>
              <p className="Txt1" >
              Sembrando el futuro financiero de nuestros niños.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              className="Imagen"
              src="https://img.freepik.com/foto-gratis/ninos-sonrientes-parque_23-2148598889.jpg?t=st=1721905219~exp=1721908819~hmac=bff73ada37cfc0607748035a46ac8cf1404c11bb5c61648edff5fa52433313ad&w=740"
              alt="..."
            />
            <div className="Contenido2 carousel-caption">
              <h5 className="Titulo2">
                <span style={{ color: "#0066CC" }}>Fi</span>
                <span style={{ color: "#0099FF" }}>n</span>
                <span style={{ color: "#FFCC00" }}>n</span>
                <span style={{ color: "#FF9933" }}>a</span>
                <span style={{ color: "#0066CC" }}>ncity</span>
              </h5>
              <p className="Txt2">
              Transformando vidas a través de la educación financiera.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="Imagen"
              src="https://img.freepik.com/foto-gratis/hermanos-jugando-juguetes-acertijo_23-2149511985.jpg?t=st=1721905262~exp=1721908862~hmac=01d4048f27184afaa7267d7cba0ee2b6e889b529446effc63f2bc9d4c922e70c&w=740"
              alt="..."
            />
            <div className="Contenido3 carousel-caption">
              <h5 className="Titulo3">
                <span style={{ color: "#0066CC" }}>Fi</span>
                <span style={{ color: "#0099FF" }}>n</span>
                <span style={{ color: "#FFCC00" }}>n</span>
                <span style={{ color: "#FF9933" }}>a</span>
                <span style={{ color: "#0066CC" }}>ncity</span>
              </h5>
              <p className="Txt3">
              Un compromiso con la educación financiera para nuestros niños
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
