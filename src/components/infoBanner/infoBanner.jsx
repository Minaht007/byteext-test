
"use client"
import styles from "./infoBanner.module.scss"
import skyImg from "../../../public/img/infoBlock/sky.svg"
import dropImg from "../../../public/img/infoBlock/drop.svg"
import flashImg from "../../../public/img/infoBlock/flash.svg"
import Image from "next/image"


const InfoBlock = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Our total green impact</h1>
            <div className={styles.cardDiv}>
                <div className={styles.card}>
                   <p className={styles.imgIcon}>
                    <Image src={skyImg} alt="skyImg" width={30} height={20} />
                </p> 
                <p className={styles.cardTitle}>3,927 kg</p>
                <p className={styles.cardText}>of CO2 saved</p>
                </div>

                <div className={styles.card}>
                   <p className={styles.imgIcon}>
                    <Image src={dropImg} alt="dropImg" width={30} height={20} />
                </p> 
                <p className={styles.cardTitle}>2,546,167 days</p>
                <p className={styles.cardText}>of drinking water saved</p>
                </div>

                <div className={styles.card}>
                   <p className={styles.imgIcon}>
                    <Image src={flashImg} alt="flashImg" width={30} height={20} />
                </p> 
                <p className={styles.cardTitle}>7,321 kWh</p>
                <p className={styles.cardText}>of energy saved</p>
                </div>
                
            </div>
        </div>
    )
}

export default InfoBlock