import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";



export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello pokeRigo!</h1>
		
		<InfoGym/>
		
	</div>
);
