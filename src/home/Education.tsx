import Card from "../components/Card"
import Title from "../components/Titles"
import Link from "../components/Link"

import utplogo from "../assets/utplogo2.jpg"

const Education = () => {
	return (
		<Card>
			<Title text="Educación"></Title>
			<div className="flex justify-between items-center gap-4 my-2">
				<img src={utplogo} className="w-24"></img>
				<div>
					<Title.Sub2 text="Ingeniería de Sistemas e Informática"></Title.Sub2>
					<p className="text-sm text-gray-600">8avo ciclo, Tercio Superior</p>
				</div>
			</div>
			<Link to="#education" label="Ver más"></Link>
		</Card>
	)
}

export default Education;