"use client";
import Image from "next/image";
import styles from "./rewiews.module.scss";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FcPrevious, FcNext } from "react-icons/fc";
import Btm from "../btm/btm"
import starsImg from "../../../public/img/describeIcons/stars.svg"

const reviewsCard = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
    img: "/img/reiews/swiper/avatar.svg",
    stars: "/img/reiews/swiper/stars.svg",
    name: "Jane, S.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
    img: "/img/reiews/swiper/avatar.svg",
    stars: "/img/reiews/swiper/stars.svg",
    name: "Jane, S.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
    img: "/img/reiews/swiper/avatar.svg",
    stars: "/img/reiews/swiper/stars.svg",
    name: "Jane, S.",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
    img: "/img/reiews/swiper/avatar.svg",
    stars: "/img/reiews/swiper/stars.svg",
    name: "Jane, S.",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
    img: "/img/reiews/swiper/avatar.svg",
    stars: "/img/reiews/swiper/stars.svg",
    name: "Jane, S.",
  },
];

const ReviewsSwip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const totalSlides = reviewsCard.length;

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
     
      <div {...handlers} className={styles.cardContainer}>
        <button onClick={prevSlide}>
          <FcPrevious  className={styles.arrowLeft} />
        </button>
        {reviewsCard
  .slice(currentIndex, currentIndex + slidesPerPage)
  .map((slide, idx) => {
    const isActive = slidesPerPage === 3 && idx === 1; // центральный слайд
    return (
      <div
        key={slide.id}
        className={`${styles.cartInfo} ${isActive ? styles.activeSlide : ""}`}
      >
        <div className={styles.clientData}>
          <img src={slide.img} alt={slide.alt} width={34} height={34} />

          <div className={styles.nameClient}>
            <p className={styles.cardName}>{slide.name}</p>
            <Image
              src={slide.stars}
              alt="con stars"
              width={60}
              height={10}
              className={styles.avatar}
            />
          </div>
        </div>
        <p className={styles.text}>{slide.text}</p>
      </div>
    );
  })}
        <button onClick={nextSlide}>
          <FcNext  className={styles.arrowRight} />
        </button>
      </div>

      <div className={styles.btmDiv}>
         <Btm/>
         <Image src={starsImg} alt="icon stars" width={340} height={17} className={styles.starsImg} />
      </div>
     
    </div>
  );
};

export default ReviewsSwip