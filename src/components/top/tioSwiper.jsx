"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import styles from "./top.module.scss";
import slides from "../../../public/json/topSlider.json";

export default function App() {
	return (
		<Swiper
			spaceBetween={20}
			centeredSlides={true}
			navigation={false}
			modules={[Autoplay]}
			loop={true}
			speed={600}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			slidesPerView={5}
			className={styles.mySwiper}
			breakpoints={{
				390: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 5,
				},
			}}
		>
			{slides.map((item) => (
				<SwiperSlide key={item.id} className={styles.imgContainer}>
					<Image
						src={item.img}
						alt={`slide ${item.id}`}
						className={styles.sliderImg}
						width={270}
						height={50}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
