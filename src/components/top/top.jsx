"use client";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./top.module.scss";
import Swiper from "./tioSwiper";

import cartSvg from "../../img/hero/icons/cart.svg";
import listSvg from "../../img/top/icons/list.svg";
import dayAndNight from "../../img/hero/icons/dayAndNight.svg";
import waySvg from "../../img/hero/icons/way.svg";
import topBannerWebp from "../../img/top/topBanner.webp";
import Image from "next/image";

import Btm from "../btm/btm";

function Top() {
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 390 && width <= 767) {
        setShowMobile(true);
      } else {
        setShowMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.headName}>as seen in</p>
        <Swiper />
      </div>
      <h2 className={styles.slogan}>Loungewear you can be proud of.</h2>
      <div className={styles.infoContainer}>
        <div>
          <ul className={styles.ulContainer}>
            <li className={styles.liCard}>
              <span className={styles.icon}>
                <Image src={cartSvg} alt="icons" width={42} height={42} />
              </span>
              <div>
                <p className={styles.title}>Ethically sourced.</p>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </li>
            <li className={styles.liCard}>
              <span className={styles.icon}>
                <Image src={listSvg} alt="icons" width={42} height={42} />
              </span>
              <div>
                <p className={styles.title}>Ethically sourced.</p>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </li>
            <li className={styles.liCard}>
              <span className={styles.icon}>
                <Image src={dayAndNight} alt="icons" width={42} height={42} />
              </span>
              <div>
                <p className={styles.title}>Ethically sourced.</p>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </li>
            <li className={styles.liCard}>
              <span className={styles.icon}>
                <Image src={waySvg} alt="icons" width={42} height={42} />
              </span>
              <div>
                <p className={styles.title}>Ethically sourced.</p>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* picture */}
        <div>
          <Image
            src={topBannerWebp}
            alt="banner"
            width={433}
            height={648}
            className={styles.banner}
          />
        </div>
      </div>

      <div className={styles.btmDiv}>{showMobile && <Btm />}</div>
    </div>
  );
}

export default Top;
