"use client"
import React, { useEffect, useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
// import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import Image from "next/image"
import styles from "./top.module.scss"

export default function App() {
  const [sliders, setSliders] = useState([])
  const progressCircle = useRef(null)
  const progressContent = useRef(null)

  useEffect(() => {
    fetch("/json/topSlider.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch JSON")
        return res.json()
      })
      .then(data => setSliders(data))
      .catch(err => console.error(err))
  }, [])

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress)
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
      breakpoints={{
        1200: {
            slidesPerView: 5, 
          },
        390: {
          slidesPerView: 3, 
        }  
      }}
    >
      {sliders.map((item) => (
        <SwiperSlide key={item.id} className={styles.imgContainer} >
          <Image src={item.img} alt={`slide ${item.id}`} width={270} height={50}  />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

