import FrostedGlassCard from "../components/FrostedGlassCard";

const ValueProposal = () => {
	return (
		<>
			<div className="md:w-[80%] md:m-auto m-4">
				<h1 className="text-4xl font-bold text-center mt-24">
					Toma el Control de tu Salud
				</h1>
				<p className="text-center text-lg">
					Dosi es una aplicación móvil de recordatorios médicos con un tono
					empático enfocado a adultos mayores. Dosi te ofrece la posibilidad de
					conectar tus recordatorios con el dispositivo de un familiar de
					confianza de manera que te mantengas adherido a tu medicación.
				</p>
				<h1 className="text-4xl font-bold text-center mt-24">
					Tecnologías utilizadas
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
					<div className="col-span-1">
						<FrostedGlassCard>
							<div className="flex flex-col justify-center gap-2 items-center m-auto p-4">
								<img src="/flutter.png" className="w-24 h-24" alt="" />
								<h2 className="text-2xl font-bold text-center">Flutter</h2>
							</div>
						</FrostedGlassCard>
					</div>
					<div className="col-span-1">
						<FrostedGlassCard>
							<div className="flex flex-col justify-center gap-2 items-center m-auto p-4">
								<img src="/expressjs.png" className="w-24 h-24" alt="" />
								<h2 className="text-2xl font-bold text-center">Express.JS</h2>
							</div>
						</FrostedGlassCard>
					</div>
					<div className="col-span-1">
						<FrostedGlassCard>
							<div className="flex flex-col justify-center gap-2 items-center m-auto p-4">
								<img src="/postgresql.png" className="w-24 h-24" alt="" />
								<h2 className="text-2xl font-bold text-center">PostgreSQL</h2>
							</div>
						</FrostedGlassCard>
					</div>
				</div>
			</div>
		</>
	);
};

export default ValueProposal;
