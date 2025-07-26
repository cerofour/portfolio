
import Navbar from "../components/Navbar";

import Hero from "./Hero";
import Skills from "./Skills";

const Home = () => {
	return (
		<>
			<Navbar />

			<div className="m-auto">
				<Hero></Hero>
				<div className="md:w-[80%] mx-auto my-28">
					<h1 className="text-4xl text-center font-bold mt-8">Habilidades</h1>
					<Skills />
				</div>
			</div>
		</>
	);
};

export default Home;
