import { PiArrowElbowDownRight } from "react-icons/pi";

type P = {
	to: string;
	label: string;
}

const Link = ({to, label}: P) => {
	return <a href={to} className="text-cyan-500 flex items-center"><PiArrowElbowDownRight></PiArrowElbowDownRight>{label}</a>
}

export default Link;