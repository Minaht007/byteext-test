
import styles from "./btm.module.scss"
import rightArrow from "../../img/hero/icons/arrowRight.svg";
import Image from "next/image";

const Btm = () => {
    return (
        <div>
            <button type="button" className={styles.btm}>
              Customize Your Outfit{" "}
              <Image
                src={rightArrow}
                alt="rightArrow"
                width={23}
                height={10}
                className={styles.arrow}
              />{" "}
            </button>
        </div>
    )
}

export default Btm