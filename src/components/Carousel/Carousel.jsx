import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './Carousel.css';
import { Pagination } from "swiper";
import { images } from '../../constants';

const carouselImgs = [ images.Carousel1, images.Carousel2, images.Carousel1, images.Carousel2, images.Carousel1, images.Carousel2, images.Carousel1, images.Carousel2 ]


const Carousel = () => {

  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
        clickable: true,
        }}
        breakpoints={{
            1240: {
                slidesPerView: 4,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 2,
            },
        }}
        modules={[Pagination]}
        className="swiper mySwiper"
    >
        {carouselImgs.map((image) => (
            <SwiperSlide>
                <img src={image} alt="Carousel Img" />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Carousel;
