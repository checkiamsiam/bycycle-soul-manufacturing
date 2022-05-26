import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import './Review.css';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import ReactStars from "react-rating-stars-component";
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../../../shared&minifier/Loading/Loading';


const Review = () => {

  const { isLoading , data } = useQuery('reviewData', () => axios.get('http://localhost:5000/reviews')

  )

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className='review-section relative h-screen bg-reviewbg bg-cover bg-no-repeat bg-center bg-fixed flex justify-center items-center'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-3/4"
      >
        {data?.data?.map(r => <SwiperSlide key={r._id}>
          <div className=' text-center md:w-4/6 w-full px-5 mx-auto py-5  lg:py-0'>
            <div class="avatar">
              <div class="md:w-32 w-24 rounded-full">
                {r?.img ? <img src={r?.img} alt='' /> 
                :
                 <div className="avatar placeholder">
                  <div className="bg-primary-focus text-neutral-content rounded-full md:w-32 w-24">
                    <span className="text-3xl">{r?.name?.slice(0, 1)}</span>
                  </div>
                </div>}
              </div>
            </div>
            <h1 className='text-primary'>{r?.name}</h1>
            <div className='flex justify-center'>
              <ReactStars
                size={30}
                value={r?.rating}
                edit={false} /> ,

            </div>
            <div className='flex justify-center mt-5'><FaQuoteLeft className='text-primary text-4xl md:text-5xl text-center' /></div>
            <p className='text-white capitalize '>{r?.reviewed}</p>
            <div className='flex justify-center mt-5'><FaQuoteRight className='text-primary text-4xl md:text-5xl text-center' /></div>

          </div>
        </SwiperSlide>)}


      </Swiper>
    </div>
  );
};

export default Review;