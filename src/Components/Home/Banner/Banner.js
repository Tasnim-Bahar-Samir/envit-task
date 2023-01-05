import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import img1 from '../../../images/banner-img.jpg'
import img2 from '../../../images/banner-img2.jpg'
import img3 from '../../../images/donation0.jpg'


export default function Banner() {
  return (
    <div className="md:h-[600px] lg:h-[700px] h-[600px] -z-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='banner-img w-full h-full'>
        <img src={img3} alt='img' className="w-full h-full rounded-lg" />
    </div>
    <div className="absolute text-white transform -translate-y-1/2 left-24 top-1/2 text-left ">
      <h1 className='md:text-6xl text-2xl font-bold text-white '>Donate for Humanity </h1>
        <p className='text-lg w-1/2 my-8'>Raise your hand for poor families.</p>
        <button className='px-3 py-3 bg-orange-600 text-white rounded-md'>Discover More</button>
        <button className='px-3 py-2 border-2 ml-5 text-white rounded-md'>Latest Project</button>
    </div></SwiperSlide>
        <SwiperSlide >
        <div className='banner-img w-full h-full'>
        <img src={img2} alt='img' className="w-full h-full rounded-lg" />
    </div>
    <div className="absolute text-white transform -translate-y-1/2 left-24 top-1/2 text-left ">
      <h1 className='text-6xl font-bold text-white'>Donate for Humanity </h1>
        <p className='text-lg w-1/2 my-8'>Raise your hand for poor families.</p>
        <button className='px-3 py-3 bg-orange-600 text-white rounded-md'>Discover More</button>
        <button className='px-3 py-2 border-2 ml-5 text-white rounded-md'>Latest Project</button>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='banner-img w-full h-full'>
        <img src={img1} alt='img' className="w-full h-full rounded-lg" />
    </div>
    <div className="absolute text-white transform -translate-y-1/2 left-24 top-1/2 text-left ">
      <h1 className='text-6xl font-bold text-white'>Donate for Humanity </h1>
        <p className='text-lg w-1/2 my-8'>Raise your hand for poor families.</p>
        <button className='px-3 py-3 bg-orange-600 text-white rounded-md'>Learn More</button>
        <button className='px-3 py-2 border-2 ml-5 text-white rounded-md'>Donate</button>
    </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
