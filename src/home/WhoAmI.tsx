import Card from "../components/Card";

import info from "../constants/info.json"

const WhoAmI = () => {
	return <Card>
		<h1 className="text-2xl font-bold">Diego Llacsahuanga</h1>
		<p>{info.whoami_description}</p>
	</Card>
}

export default WhoAmI;