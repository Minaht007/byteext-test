"use client";
import { useEffect, useState } from "react";
import styles from "../about/about.module.scss";
import Image from "next/image";
import aboutImg from "../../img/about/aboutBaner.png";
import Btm from "../btm/btm";

const About = () => {
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
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

<h2 className={styles.titleMob}>Be your best self.</h2>

      <div>
        <Image
          src={aboutImg}
          alt="banner"
          width={344}   
          height={362}
          className={styles.img}
        />
      </div>

      <div>
        <h2 className={styles.title}>Be your best self.</h2>
        <p className={styles.scripts}>
          Hi! My name’s [Insert Name], and I founded [Insert] in ____.{" "}
        </p>
        <p className={styles.scripts}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.{" "}
        </p>
        <p className={styles.scripts}>
          Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
          placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
          nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
          congue, faucibus libero nec, placerat ligula.{" "}
        </p>
        <p className={styles.scripts}>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.{" "}
        </p>
        <p className={styles.scripts}>
          Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis,
          sapien eget lobortis fringilla, eros ipsum tristique tellus, ac
          convallis urna massa at nibh.{" "}
        </p>
        <p className={styles.scripts}>
          Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
          leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
          sapien.{" "}
        </p>
        <p className={styles.scripts}>Cras mattis varius mollis.</p>
        <div className={styles.btmDiv}>{showMobile && <Btm />}</div>
      </div>
    </div>
  );
};

export default About;
