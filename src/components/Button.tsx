import { PiArrowElbowRight } from "react-icons/pi";

type P = {
	variant: "success" | "redirect";
	children: React.ReactNode;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({variant, children, onClick}: P) => {
	switch (variant) {
		case "redirect":
			return <button type="button" onClick={onClick} className="text-cyan-500 hover:cursor-pointer flex gap-2 items-center">
				<PiArrowElbowRight></PiArrowElbowRight>
				{children}
				</button>
		default:
			return <button type="submit" className="text-cyan-500 hover:cursor-pointer">{children}</button>
	}
}

export default Button;