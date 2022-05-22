import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import './Review.css';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import ali from '../../../assets/images/users-avatar/ali.png'
import sakib from '../../../assets/images/users-avatar/sakib.png';
import siam from './../../../assets/images/users-avatar/siam.png'
import nasim from './../../../assets/images/users-avatar/nasim.jpg'


const Review = () => {

  return (
    <div className='review-section relative h-screen bg-reviewbg bg-cover bg-no-repeat bg-center bg-fixed flex justify-center items-center'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-3/4"
      >
        <SwiperSlide>
          <div className=' text-center md:w-4/6 w-full px-5 mx-auto py-5  lg:py-0'>
            <div class="avatar">
              <div class="md:w-32 w-24 rounded-full">
                <img src={siam} alt=''/>
              </div>
            </div>
            <h1 className='text-primary'>Sheikh Shahariar Siam</h1>
            <div className='flex justify-center mt-5'><FaQuoteLeft className='text-primary text-4xl md:text-5xl text-center'/></div>
            <p className='text-white capitalize '>I am a businessman in Gulistan Cakkar. i have a little shop and they supply me bycyle parts that i sell in Retailers. their materials quality are very good and their service care are also very smarty</p>
            <div className='flex justify-center mt-5'><FaQuoteRight className='text-primary text-4xl md:text-5xl text-center'/></div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' text-center md:w-4/6 w-full px-5 mx-auto py-5  lg:py-0'>
            <div class="avatar">
              <div class="md:w-32 w-24 rounded-full">
                <img src={ali} alt=''/>
              </div>
            </div>
            <h1 className='text-primary'>Mohammad Ali</h1>
            <div className='flex justify-center mt-5'><FaQuoteLeft className='text-primary text-4xl md:text-5xl text-center'/></div>
            <p className='text-white capitalize '>You guys can call me dalal. i am a tricky businessman i buy parts from there and sell to other mini businessman. doing this i earn some money and also get commition from both two partys</p>
            <div className='flex justify-center mt-5'><FaQuoteRight className='text-primary text-4xl md:text-5xl text-center'/></div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' text-center md:w-4/6 w-full px-5 mx-auto py-5  lg:py-0'>
            <div class="avatar">
              <div class="md:w-32 w-24 rounded-full">
                <img src={sakib} alt=''/>
              </div>
            </div>
            <h1 className='text-primary'>Akram Sakib</h1>
            <div className='flex justify-center mt-5'><FaQuoteLeft className='text-primary text-4xl md:text-5xl text-center'/></div>
            <p className='text-white capitalize '>I am a sports specialist. my organization arrange many sports tournament bycycle ride is one of them and every time when we need bycycle for tournament we came here and always we found best quality of bycycle there and price are also stable</p>
            <div className='flex justify-center mt-5'><FaQuoteRight className='text-primary text-4xl md:text-5xl text-center'/></div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' text-center md:w-4/6 w-full px-5 mx-auto py-5  lg:py-0'>
            <div class="avatar">
              <div class="md:w-32 w-24 rounded-full">
                <img src={nasim} alt=''/>
              </div>
            </div>
            <h1 className='text-primary'>Nasimur Rahman</h1>
            <div className='flex justify-center mt-5'><FaQuoteLeft className='text-primary text-4xl md:text-5xl text-center'/></div>
            <p className='text-white capitalize '>i am from mirpur in mirpur shopping complex i have a bycycle shop and i also sell bycycle parts here. from the starting of my business they delivered me all of product i need for my shop and satifactorly they always completed my wishes by giving proper instrument quality</p>
            <div className='flex justify-center mt-5'><FaQuoteRight className='text-primary text-4xl md:text-5xl text-center'/></div>

          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Review;