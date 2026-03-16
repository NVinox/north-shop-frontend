"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { SLIDES } from "@/widgets/mainSlider";

import { LayoutContainer } from "@/shared/layoutContainer";
import MainSliderBackground from "@/shared/assets/main-sliders-bg.png";

import "swiper/css";
import "swiper/css/effect-fade";

export default function MainSlider() {
	return (
		<section
			className="relative overflow-hidden bg-repeat-x bg-center bg-[length:auto_100%]"
			style={{ backgroundImage: `url(${MainSliderBackground.src})` }}
		>
			<div className="absolute inset-0 bg-white/70 z-0" />

			<LayoutContainer>
				<Swiper
					modules={[Autoplay, EffectFade]}
					effect="fade"
					fadeEffect={{ crossFade: true }}
					spaceBetween={50}
					slidesPerView={1}
					scrollbar={{ draggable: true }}
					speed={1000}
					autoplay={{ delay: 5000 }}
					loop
					navigation
				>
					{SLIDES.map(({ id, icon, text, alt, isH1 }) => (
						<SwiperSlide className="cursor-pointer" key={id}>
							<div className="flex items-center justify-between gap-x-[18px] min-h-[180px] md:min-h-[160px] xs:min-h-[80px]">
								<Image
									className="hidden md:block"
									src={icon}
									alt={alt}
									width={300}
									height={200}
								/>

								{isH1 ? (
									<h1 className="text-base font-bold text-center w-full lg:text-right lg:text-[48px] md:text-lg">
										{text}
									</h1>
								) : (
									<h2 className="text-base font-bold text-center w-full lg:text-right lg:text-[48px] md:text-lg">
										{text}
									</h2>
								)}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</LayoutContainer>
		</section>
	);
}
