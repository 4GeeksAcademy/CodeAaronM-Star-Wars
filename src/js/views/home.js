import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Presentacion } from "../component/Presentacion";
import { AboutUs } from "../component/aboutUs";
import { Fundation } from "../component/Fundation";
import { CIGA } from "../component/CIGA";
import { MV } from "../component/MV";
import { Questions } from "../component/Questions";
import { Contact } from "../component/contact";
import { Valores } from "../component/valores";


export const Home = () => (
	<div className="text-center" id="home">
		<Presentacion/>
		<Fundation/>
		<MV/>
		<Valores/>
		<CIGA/>	
		<AboutUs/>
		<Questions/>
		<Contact/>
	</div>
);
