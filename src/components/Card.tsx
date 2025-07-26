type P = {
	children: React.ReactNode;
}

const Card = ({children}: P) => {
	return (
		<div className="p-8 shadow-lg hover:scale-105 transition-all duration-300 rounded-4xl">
			{children}
		</div>
	)
}

export default Card;