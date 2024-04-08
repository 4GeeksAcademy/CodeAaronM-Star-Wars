import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { DetailPeople } from "./component/detailPeople.jsx";
import { DetailPlanets } from "./component/detailPlanets.jsx";
import { DetailFilms } from "./component/detailFilms.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import "../styles/layout.css"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/detalles/people/:uid" element={<DetailPeople />} />
						<Route path="/detalles/planets/:uid" element={<DetailPlanets />} />
						<Route path="/detalles/films/:uid" element={<DetailFilms />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
	);
};

export default injectContext(Layout);
