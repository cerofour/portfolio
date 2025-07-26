interface P extends React.ComponentProps<'h1'> {
	text: string;
};

const Title = ({text, className}: P) => {
	return <h1 className={`font-bold text-2xl ${className}`}>{text}</h1>
}

Title.Sub2 = ({text}: P) => {
	return <h2 className="font-bold text-xl">{text}</h2>
}

export default Title;