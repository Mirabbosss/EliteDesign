'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

export const Carousel = () => {
     return (
          <div className='flex justify-center'>
               <div className='container'>
                    <Swiper
                         modules={[EffectCoverflow]}
                         spaceBetween={300} // Adjust space between slides
                         slidesPerView={3} // Preview 3 slides
                         centeredSlides={true} // Center the active slide
                         loop={true} // Enable infinite loop
                         effect={'coverflow'} // Coverflow effect to make center slide prominent
                         coverflowEffect={{
                              rotate: 0,
                              stretch: -50, // Brings the center slide nearer
                              depth: 500, // Depth to make center more prominent
                              modifier: 1,
                              slideShadows: false,
                         }}
                    >
                         <SwiperSlide>
                              <div className='w-full h-[475px] bg-gray-700' />
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className='w-full h-[475px] bg-gray-700' />
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className='w-full h-[475px] bg-gray-700' />
                         </SwiperSlide>
                    </Swiper>
               </div>
          </div>
     )
}