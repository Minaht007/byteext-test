"use client"
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FcPrevious, FcNext } from "react-icons/fc";
import styles from "./describe.module.scss"
import Btm from "../btm/btm"
import starsImg from "../../../public/img/describeIcons/stars.svg"
import Image from "next/image";

const icons = [
    {id: 1, img: "/img/describeIcons/cart.svg", slogan: "You save.", script: "Browse our comfort sets and save 15% when you bundle."},
    {id: 2, img: "/img/describeIcons/truck.svg", slogan: "We ship.", script: "We ship your items within 1-2 days of receiving your order."},
    {id: 3, img: "/img/describeIcons/dAn.svg", slogan: "You enjoy!", script: "Wear hernest around the house, out on the town, or in bed."}
]



const Describe = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
	const [slidesPerPage, setSlidesPerPage] = useState(1);
	const totalSlides = icons.length;

	useEffect(() => {
		const changeSlide = () => {
			const width = window.innerWidth;

			if (width < 870) {
				setSlidesPerPage(1);
			} else if (width >= 871 && width <= 1270) {
				setSlidesPerPage(2);
			} else if (width >= 1271) {
				setSlidesPerPage(3);
			}
		};

		changeSlide();
		window.addEventListener("resize", changeSlide);

		return () => window.removeEventListener("resize", changeSlide);
	}, []);

	const nextSlide = () => {
		if (currentIndex === totalSlides - slidesPerPage) {
			return setCurrentIndex(0);
		}
		const nextIndex = (currentIndex + 1) % totalSlides;
		setCurrentIndex(nextIndex);
	};

	const prevSlide = () => {
		if (currentIndex === 0) {
			return setCurrentIndex(totalSlides - slidesPerPage);
		}
		const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
		setCurrentIndex(prevIndex);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className={styles.mainDiv}>
             <h1 className={styles.h1}>Comfort made easy</h1>
			<div {...handlers} className={styles.container}>
				<button onClick={prevSlide} >
					<FcPrevious size={40} />
				</button>
				{icons.slice(currentIndex, currentIndex + slidesPerPage).map((slide) => (                    
					<ul className={styles.ul} key={slide.id}>                       
						<li key={slide.id} className={styles.li}>
                        <img src={slide.img} alt={slide.alt} width={51} height={51} />
                        <h2 className={styles.h2}>{slide.slogan}</h2>
						<p className={styles.p}>{slide.script}</p>
                        </li>
					
					</ul>
				))}
				<button onClick={nextSlide} className={styles.arrowButton}>
					<FcNext size={40} />
				</button>               
			</div>
            <div>
                <Btm />
				<Image src={starsImg} alt="icon" width={340} height={17} className={styles.imgStar} />
            </div>
            
		</div>
	);
}

export default Describe