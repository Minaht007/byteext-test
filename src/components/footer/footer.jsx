"use client";
import styles from "./footer.module.scss";
import banner from "../../../public/img/footer/footerBanner.jpg";
import Image from "next/image";
import paySysImg from "../../../public/img/footer/paySystem.svg";
import truckImg from "../../../public/img/footer/icon/truck.svg";
import cartImg from "../../../public/img/footer/icon/cart.svg";
import shieldImg from "../../../public/img/footer/icon/shield.svg";
import Btm from "../btm/btm";
import baner1 from "../../../public/img/footer/baner1.jpg";
import baner2 from "../../../public/img/footer/baner2.jpg";
import baner3 from "../../../public/img/footer/baner3.jpg";
import baner4 from "../../../public/img/footer/wastePic.jpg";
import { useEffect, useState } from "react";

const Footer = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className={styles.container}>

<h1 className={styles.title}>Find something you love.</h1>


      {width > 1200 ? (
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat.
      </p>
      ) : width < 767 ? (
        <p className={styles.text}>Click below to browse our collection!</p>
      ) : null}

      
      {/* <Image src={banner} alt="banner" width={815} height={373} className={styles.bannerImg} /> */}

      <div className={styles.bannerDiv}>
        <Image
          src={baner4}
          alt="wast"
          width={67}
          height={95}
          className={styles.baner1}
        />
        <Image
          src={baner1}
          alt="wast"
          width={97}
          height={147}
          className={styles.baner2}
        />
        <Image
          src={baner2}
          alt="wast"
          width={139}
          height={211}
          className={styles.baner3}
        />
        <Image
          src={baner3}
          alt="wast"
          width={97}
          height={147}
          className={styles.baner4}
        />
        <Image
          src={baner4}
          alt="wast"
          width={67}
          height={95}
          className={styles.baner5}
        />
      </div>

      <Btm />
      <Image
        src={paySysImg}
        alt="pay"
        width={364}
        height={22}
        className={styles.paySysImg}
      />

      <div className={styles.plusesDiv}>
        <div className={styles.pluses}>
          <Image src={truckImg} alt="truck" width={33} height={33} />
          <p className={styles.pluseText}>FREE Shipping on Orders over $200</p>
        </div>
        <div className={styles.pluses}>
          <Image
            src={shieldImg}
            alt="shieldImg"
            width={33}
            height={33}
            className={styles.img}
          />
          <p className={styles.pluseText}>Over 500+ 5 Star Reviews Online</p>
        </div>
        <div className={styles.pluses}>
          <Image
            src={cartImg}
            alt="cartImg"
            width={33}
            height={33}
            className={styles.img}
          />
          <p className={styles.pluseText}>Made ethically and responsibly.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
