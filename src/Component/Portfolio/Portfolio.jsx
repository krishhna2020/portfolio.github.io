import React from 'react'
import './Portfolio.css';
import myimg1 from '../../assets/sidebar.png'
import myimg2 from '../../assets/hoc.png'
import myimg3 from '../../assets/ecommerce.png'
import myimg4 from '../../assets/musicapp.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Portfolio = () => {
  return (
    <div className="portfolio" id="my-portfoli">
        <span>Projrct</span>
        <span>Recent Projerct</span>

        <Swiper
         spaceBetween={30}
         slidesPerView={3}
         grabCursor={true}
        
         className='portfolio-slider '
        >

        
          <SwiperSlide>
            <img src={myimg1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={myimg2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={myimg3} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={myimg4} alt="" />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio