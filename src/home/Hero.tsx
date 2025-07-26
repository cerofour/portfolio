const Hero = () => {
	return (
		<div className="relative flex items-center justify-center m-auto h-156 w-[95%] rounded-2xl mt-24 overflow-hidden">
			<img
				src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Fondo Hero"
				className="absolute inset-0 w-full h-screen object-cover z-0"
			/>
			<div className="absolute inset-0  z-10" />
			<div className="relative z-20 flex flex-col items-center justify-center w-full">
				<h1 className="text-5xl md:text-6xl text-white text-center drop-shadow-lg font-bold">
					Diego Llacsahuanga
				</h1>
				<h1 className="text-2xl md:text-3xl font-semibold  text-center mt-2 drop-shadow font-geist">
					Desarrollador Web Junior
				</h1>
				<div className="flex gap-6 mt-8 justify-center">
					<a
						href="/DALB-CV-ES-1.pdf"
						download
						className="
						outline-2 outline-offset-2 outline-solid 
						flex items-center gap-2 bg-primary-hard hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5v15m0 0l-6-6m6 6l6-6"
							/>
						</svg>
						Descargar CV
					</a>
					<a
						href="https://www.linkedin.com/in/diego-llacsahuanga/"
						target="_blank"
						rel="noopener noreferrer"
						className="
						outline-2 outline-offset-2 outline-solid 
						flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z" />
						</svg>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
