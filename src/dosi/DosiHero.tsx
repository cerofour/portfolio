import { FaGithub } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'

const DosiHero = () => {
	return (
		<div className="relative flex items-center justify-center m-auto h-156 w-[95%] rounded-2xl overflow-hidden">
			<img
				src="/dosi/dosi-hero-bg.jpg"
				alt="Fondo Dosi Hero"
				className="absolute inset-0 w-full h-full object-cover z-0"
			/>
			<div className="absolute inset-0 z-10 bg-black/30" />
			<div className="relative z-20 grid md:grid-cols-2 w-full p-8">
				<div className="col-span-2 md:col-span-1 flex flex-col items-start gap-4 py-8">
					<h1 className="text-5xl font-bold text-white drop-shadow-lg">Dosi</h1>
					<h3 className="text-xl text-gay-300 text-white drop-shadow">
						Tu app de Recordatorios Médicos Favorita
					</h3>
					<div className="flex gap-4 mt-4">
						<a
							href="#"
							className="backdrop-blur-md bg-white/10 border border-white/30 shadow-lg rounded-xl px-6 py-3 flex items-center gap-2 text-white font-semibold transition hover:bg-white/20 hover:scale-105"
							style={{ WebkitBackdropFilter: "blur(8px)" }}
						>
							<SiGoogleplay size={22} /> Descargar
						</a>
						<a
							href="#"
							className="backdrop-blur-md bg-white/10 border border-white/30 shadow-lg rounded-xl px-6 py-3 flex items-center gap-2 text-white font-semibold transition hover:bg-white/20 hover:scale-105"
							style={{ WebkitBackdropFilter: "blur(8px)" }}
						>
							<FaGithub size={22} /> Repositorio
						</a>
					</div>
				</div>
				<div className="col-span-2 md:col-span-1 flex items-center justify-center">
					<div>
					<Swiper spaceBetween={20} autoplay={true} slidesPerView={1} loop={true} style={{ width: "100%", maxWidth: 800 }}>
						<SwiperSlide>
							<video
								autoPlay={true}
								width="100%"
								className="rounded-xl shadow-lg"
							>
								<source src="/dosi/Relax2.mp4" type="video/mp4" />
							</video>
						</SwiperSlide>
						<SwiperSlide>
							<img src="/dosi/Danger2.png" className="rounded-xl shadow-lg" alt="Pantalla de Peligro de Dosi"/>
						</SwiperSlide>
					</Swiper>

					</div>
				</div>
			</div>
		</div>
	);
};

export default DosiHero;
