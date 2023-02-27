import React from 'react'
import './Testimonial.css'
import profilepic1 from '../../assets/profile1.jpg'
import profilepic2 from '../../assets/profile2.jpg'
import profilepic3 from '../../assets/profile3.jpg'
import profilepic4 from '../../assets/profile4.jpg'
import profilepic5 from '../../assets/profile5.jpg'
import profilepic6 from '../../assets/profile6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonial = () => {
    const clents=[
        {

        img:profilepic1,
        review:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam'
        

    },
    {
        img:profilepic2,
        review:
        'hi my name is krishna murari and i am reviewing this website portfolio in rating 10 to rating 50'
 
    },
    {
        img:profilepic3,
        review:
        'hi my name is krishna murari and i am reviewing this website portfolio in rating 10 to rating 50'
 
    },
    {
        img:profilepic4,
        review:
        'hi my name is krishna murari and i am reviewing this website portfolio in rating 10 to rating 50'
 
    },
    {
        img:profilepic5,
        review:
        'hi my name is krishna murari and i am reviewing this website portfolio in rating 10 to rating 50'
 
    },
    {
        img:profilepic6,
        review:
        'hi my name is krishna murari and i am reviewing this website portfolio in rating 10 to rating 50'
 
    },
]
  return (
    <div className="testimonial-wrap" id='my-terstmonial'>
        <div className="theading">
            <span>Client Alway get</span>
            <span>Expectinional Work</span>
            <span>From Me.......</span>
        </div>
        <Swiper
        
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={1}
        pagination={{clickable: true}}
        >
           {clents.map((clents, index)=>{
            return  <SwiperSlide key={index}>
                <div className="testimonial">
                <img src={clents.img} alt="" />
               <span>{clents.review}</span>
                </div>
              
            </SwiperSlide>
           })}
        </Swiper>
    
    </div>
  )
}

export default Testimonial