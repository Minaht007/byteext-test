import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import Logo from "../../img/LOGO.svg";
import dayAndNightIcon from "../../img/hero/icons/dayAndNight.svg";
import cart from "../../img/hero/icons/cart.svg";
import way from "../../img/hero/icons/way.svg";
import Btm from "../btm/btm"

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
          </ul>

          <Image src={banner} alt="baner" width={725} height={422} className={styles.banner} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
