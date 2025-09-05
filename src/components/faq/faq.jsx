"use client";
import styles from "./faq.module.scss";
import plusImg from "../../../public/img/faq/plus.svg";
import minesImg from "../../../public/img/faq/minus.svg";
import { useState } from "react";
import Image from "next/image";
import faqBanner from "../../../public/img/faq/faqBanner.jpg"

const info = [
  {
    id: 1,
    title: "lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 2,
    title: "lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 3,
    title: "lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 4,
    title: "lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 5,
    title: "lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 6,
    title: "lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
   <div className={styles.mainBox}>
     <div className={styles.container}>
      <div className={styles.lines}>
        <h1 className={styles.slogan}>Frequently asked questions.</h1>
        {info.map((item) => (
          <div key={item.id} className={styles.block}>
            <div onClick={() => toggleFaq(item.id)} className={styles.infoBlock}>
              <p className={styles.title}>{item.title}</p>
              <Image
                src={activeId === item.id ? minesImg : plusImg}
                alt="toggle"
                width={20}
                height={20}
              />
            </div>
            {activeId === item.id && <p className={styles.text}>{item.text}</p>}
          </div>
        ))}
      </div>
      
    </div>
    <div className={styles.imgBox}>
        <Image src={faqBanner} alt="faqBanner" width={430} height={645} />
      </div>
   </div>
  );
};

export default Faq;
