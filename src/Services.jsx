import React from 'react';
import {services} from './Data';
import {FaArrowRight} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
 

const Services = () => {
  return (
    <section className='services section' id='services'>
        <h2 className="section__title text-cs">What is my job</h2>
        <p className="section__subtitle">
            My <span>Services</span>
        </p>
        <Swiper 
            modules={[Pagination]}  
            pagination={{clickable:true}} 
            breakpoints={{
            540:{slidesPerView:1, spaceBetween:30}, 
            768:{slidesPerView:2,spaceBetween:30}, 
            1200:{slidesPerView:3, spaceBetween:40}
        }} className="services__container container mySwiper">
            {services.map((service,index)=>{
                return (
                    <SwiperSlide key={index} className="services__item card card-one">
                        <span className='services__subtitle text-cs'>
                            {service.name}
                        </span>
                        <h3 className="services__title">{service.title}</h3>
                        <p className="services__description">{service.desc}</p>
                        <a href="#" className='link'>See prices <FaArrowRight className='link__icon'/></a>
                        <img src="SHAPE" alt="SHAPE" className="shape c__shape" />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Services