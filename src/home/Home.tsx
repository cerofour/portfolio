
import Navbar from "../components/Navbar";

import Hero from "./Hero";
import Skills from "./Skills";

const Home = () => {
	return (
		<>
			<Navbar />

			<div className="m-auto">
				<Hero></Hero>
				<Skills />
			</div>
		</>
	);
};

export default Home;
