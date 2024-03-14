import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import p2 from 'imgPath/final.jpg'
import Slider2 from 'imgPath/slider3.jpg'

function DesktopSlider() {
    return (
        <>
        <div className="container-fluid p-0">
        <Swiper
                slidesPerView={1}
                effect={'fade'}
                modules={[Pagination, Autoplay, EffectFade]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">
                {/* <SwiperSlide>
                    <img src={SliderImg} width="100%"></img>
                    <h1 style={{position:'relative', marginTop:'-100px', color:'#fff', textAlign:'center'}}>Be Connected</h1>
                </SwiperSlide> */}
                <SwiperSlide><img src={p2} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={Slider2} width="100%"></img></SwiperSlide>
            </Swiper>
            </div>
        </>
    )
}

export default DesktopSlider
