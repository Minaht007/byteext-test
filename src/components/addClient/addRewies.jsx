"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./rewiews.module.scss";
import ReviewSwiper from "./reviewsSwiper"

const gallery = [
  "/img/reiews/Rectangle 737 (1).jpg",
  "/img/reiews/Rectangle 738.jpg",
  "/img/reiews/Rectangle 739.jpg",
  "/img/reiews/Rectangle 740.jpg",
  "/img/reiews/Rectangle 741.jpg",
  "/img/reiews/Rectangle 742.jpg",
  "/img/reiews/Rectangle 743.jpg",
  "/img/reiews/Rectangle 744.jpg",
  "/img/reiews/Rectangle 745.jpg",
  "/img/reiews/Rectangle 746.jpg",
  "/img/reiews/Rectangle 747.jpg",
  "/img/reiews/Rectangle 748.jpg",
  "/img/reiews/Rectangle 749.jpg",
  "/img/reiews/Rectangle 750.jpg",
  "/img/reiews/Rectangle 751.jpg",
  "/img/reiews/Rectangle 752.jpg",
  "/img/reiews/Rectangle 753.jpg",
  "/img/reiews/Rectangle 754.jpg",
  "/img/reiews/Rectangle 755.jpg",
  "/img/reiews/Rectangle 756.jpg",
  "/img/reiews/Rectangle 757.jpg",
  "/img/reiews/Rectangle 758.jpg",
];

const Reviews = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayed = isMobile ? gallery.slice(0, 8) : gallery;

  return (
    <div>
      <h1 className={styles.title}>What are our fans saying?</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </p>

      <div className={styles.imgContainer}>
        {displayed.map((src, idx) => (
          <div key={idx} className={styles.gallery}>
            <Image
              src={src}
              alt={`review-${idx}`}
              width={102}
              height={102}
              className={styles.img}
            />
          </div>
        ))}
      </div>
          <ReviewSwiper />
    </div>
  );
};

export default Reviews;
