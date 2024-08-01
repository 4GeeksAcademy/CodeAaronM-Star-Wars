import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Contactos from "./views/contactos";
import CrearContacto from "./views/CrearContacto";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {


	return (
		<div>
			<BrowserRouter >
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contactos" element={<Contactos />} />
						<Route path="/crearcontacto" element={<CrearContacto />} />
						<Route path="/crearcontacto/:id" element={<DetalleContacto />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
