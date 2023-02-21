import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from 'swiper';
import SalDappLogo from "../public/images/sal-Dapp.png"
import Image from "next/image"
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {
  return (
    <>
      <div name = "About" className = "w-full py-5 bg-gradient-to-b from-black to-gray-800">
        <h1 className = "text-4xl pt-8 pb-4 px-24 font-semibold max-md:text-center text-white">Happy Client Works</h1>
        <Swiper
          modules = {[Pagination, A11y, Autoplay]}
          spaceBetween = {5}
          slidesPerView = {2}
          pagination = {{ clickable: true }}
          autoplay = {{delay: 2000}}
          onSwiper = {(swiper) => console.log(swiper)}
          onSlideChange = {() => console.log('slide change')}
        >
        <div className = "p-10 text-white">
          <SwiperSlide>
            <div className = "text-left py-8 px-16 rounded-lg shadow-2xl relative">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>
            <div className = "grid grid-cols-2">
              <Image className = "rounded-full" src = {SalDappLogo} height = "30" width = "30" alt = ""/>
              <div>
                <p>XYZ</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
        </div>
        
        <SwiperSlide>Slide 2</SwiperSlide>
        ...
        </Swiper>
      </div>
    </>
  )
}

export default Testimonial
