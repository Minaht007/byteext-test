import styles from "./footer.module.scss";
import banner from "../../../public/img/footer/footerBanner.jpg";
import Image from "next/image";
import paySysImg from "../../../public/img/footer/paySystem.svg"
import truckImg from "../../../public/img/footer/icon/truck.svg"
import cartImg from "../../../public/img/footer/icon/cart.svg"
import shieldImg from "../../../public/img/footer/icon/shield.svg"
import Btm from "../btm/btm"

const Footer = () => {
  return (
    <div className={styles.container}>    
        <h1 className={styles.title}>Find something you love.</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.
        </p>
        <Image src={banner} alt="banner" width={815} height={373} />
        <Btm/>
        <Image src={paySysImg} alt="pay" width={364} height={22}  />

      <div className={styles.plusesDiv}>
      <div className={styles.pluses}> 
            <Image src={truckImg} alt="truck" width={33}  height={33}/>
            <p className={styles.pluseText}>FREE Shipping on Orders over $200</p>
        </div>
        <div className={styles.pluses}> 
            <Image src={shieldImg} alt="shieldImg" width={33}  height={33} className={styles.img} />
            <p className={styles.pluseText}>Over 500+ 5 Star Reviews Online</p>
        </div>
        <div className={styles.pluses}> 
            <Image src={cartImg} alt="cartImg" width={33}  height={33} className={styles.img} />
            <p className={styles.pluseText}>Made ethically and responsibly.</p>
        </div>
      </div>





    </div>  
  );
};
export default Footer;
