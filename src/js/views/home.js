import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Presentation } from "../component/presentation";
import { AboutUs } from "../component/aboutUs";
import { Identity } from "../component/identity";
import { Programs } from "../component/programs";
import { Members } from "../component/menbers";
import { Contact } from "../component/contact";



export const Home = () => (
	<div className="text-center" id="home">
		<Presentation/>
		<AboutUs/>
		<Identity/>
		<Programs/>
		<Members/>
		<Contact/>
	</div>
);
