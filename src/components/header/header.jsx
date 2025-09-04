"use client"
import { useEffect, useState } from "react"
import styles from "./header.module.scss"

const Header = () => {

    const phraseOne = "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders &gt; $200 | easy 45 day return window."
        const phraseTwo = "FREE SHIPPING on orders > $200"

    const [text, setText] = useState(phraseTwo)

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 1200) {
            setText(phraseTwo)
          } else {
            setText(phraseOne)
          }
        }    
        handleResize()
        
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }, [])


    return (
        <div className={styles.container}>
            <p className={styles.title}>{text}</p>
        </div>
    )
}

export default Header