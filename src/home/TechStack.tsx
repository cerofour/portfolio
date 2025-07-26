import Card from "../components/Card";
import Title from "../components/Titles";

import react from "../assets/react.svg"
import express from "../assets/express.png"
import postgresql from "../assets/postgresql.png"
import node from "../assets/node.png"

import Link from "../components/Link";

const TechStack = () => {

	const logos = [
		react, express, postgresql, node
	]

	return (
		<Card>
			<Title text="Stack"></Title>
			<div className="flex gap-2 justify-between my-2">
				{logos.map((img, i) => <img key={i} src={img} className="w-12" alt="tech"></img>)}
			</div>
			<Link to="#tech" label="Ver más"></Link>
		</Card>
	);
};

export default TechStack;
