import { useRef, useState, useEffect } from "react";

const Navbar = () => {
	const navRef = useRef<HTMLDivElement>(null);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const links = [
		{
			link: "/education",
			label: "Educación",
		},
		{
			link: "/education",
			label: "Experiencia",
		},
		{
			link: "/education",
			label: "Proyectos",
		},
		{
			link: "/education",
			label: "Contacto",
		},
	];

	return (
		<nav
			ref={navRef}
			className={`shadow-lg h-16 flex items-center bg-black w-full z-50 fixed top-0 left-0 transition-all duration-300 ${scrolled ? "backdrop-blur-lg bg-black/80" : ""}`}
		>
			<div className="w-full">
				<div className="flex w-full justify-between px-8">
					<h1 className="text-2xl font-medium text-white">
						<a href="/">Diego L.</a>
					</h1>
					<ul className="flex items-center justify-center font-medium text-white gap-4 font-geist">
							<li key="dosi" className="hover:bg-cyan-300 hover:text-black rounded-xl px-3 py-1 transition-all duration-300">
								<a href="/dosi-project">Dosi</a>
							</li>

						{links.map((link) => (
							<li key={link.label} className="hover:bg-gray-hard rounded-xl px-3 py-1 transition-all duration-300">
								<a href={link.link}>{link.label}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
