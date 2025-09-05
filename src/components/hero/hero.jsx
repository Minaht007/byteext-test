import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import Logo from "../../img/LOGO.svg";
import dayAndNightIcon from "../../img/hero/icons/dayAndNight.svg";
import cart from "../../img/hero/icons/cart.svg";
import way from "../../img/hero/icons/way.svg";
import Btm from "../btm/btm"
import avatar from "../../../public/img/hero/avatar.jpg"
import star from "../../img/hero/icons/star.svg"

import banner from "../../img/hero/banner.webp";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        src={Logo}
        alt="logo"
        width={200}
        height={35}
        className={styles.logo}
      />
      <div>
        <h2 className={styles.slogan}>
          Don’t apologize for being comfortable.
        </h2>

        <div className={styles.infoBlock}>
          <ul className={styles.listContainer}>
            <li className={styles.list}>
              <Image
                src={dayAndNightIcon}
                alt="icon"
                width={31}
                height={31}
                className={styles.icons}
              />
              <p className={styles.text}>
                Beautiful, comfortable loungewear for day or night.
              </p>
            </li>
            <li className={styles.list}>
              <Image
                src={cart}
                alt="icon"
                width={31}
                height={31}
                className={styles.icons}
              />
              <p className={styles.text}>
                No wasteful extras, like tags or plastic packaging.
              </p>
            </li>
            <li className={styles.list}>
              <Image
                src={way}
                alt="icon"
                width={31}
                height={31}
                className={styles.icons}
              />
              <p className={styles.text}>
                Our signature fabric is incredibly comfortable — unlike 
                anything you’ve ever felt.
              </p>
            </li>
            <Btm/>

            <div className={styles.revContainer}>
              <div className={styles.reviewsHeader}>
                <div>
                  <Image src={avatar} alt="avatar" width={39} height={39} />
                </div>
                <div  className={styles.revNameBlock}>
                  <p className={styles.revName}>Amy P.</p>
                  <p className={styles.revStar}>
                    <Image src={star} alt="star" width={60} height={10} />
                    One of 500+ 5 Star Reviews Online
                  </p>
                </div>
              </div>

              <p className={styles.revText}>Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them. </p>


            </div>

          </ul>

          <Image src={banner} alt="baner" width={725} height={422} className={styles.banner} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
