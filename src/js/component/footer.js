import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="container-fluid bg-dark text-light footer py-3 mb-0 wow fadeIn" data-wow-delay="0.1s">
		<div className="container">
			<div className="row g-5">
				<div className="col-lg-3 col-md-6 justify-content-center text-center">
					<h1>logo</h1>
				</div>
				<div className="col-lg-3 col-md-6 justify-content-center text-center">
					<h4 className="contacto-footer mb-4">Contáctanos</h4>
					<p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Centro Comercial Vizcaya, piso 3.</p>
					<p className="mb-2"><i className="fa fa-phone me-3"></i>+58 414 211 7731</p>
					<p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
				</div>
				<div className="col-lg-3 col-md-6 justify-content-center text-center">
					<h4 className="mb-4 links-footer ">Popular Links</h4>
					<div className="d-flex flex-column">
						<Link className="btn btn-link" href="">Sobre nosotros</Link>
						<Link className="btn btn-link" href="">Clases y servicios</Link>
						<Link className="btn btn-link" to="/">Contacto</Link>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 justify-content-center text-center">
					<h4 className="mb-4 follow-footer">Síguenos</h4>
					<div className="d-flex pt-2 justify-content-center text-center">
						{/* <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-twitter"></i></a>
						<a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-facebook-f"></i></a>
						<a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-youtube"></i></a>
						<a className="btn btn-square btn-outline-light me-0" href=""><i className="fab fa-instagram"></i></a> */}
					</div>
				</div>
			</div>
		</div>
	</footer>
);
