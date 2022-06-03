import React from 'react';
import { Link } from 'react-scroll'
import bgV from '../../../assets/images/banner.mp4'
import './Banner.css'


const Banner = () => {
  return (
    <>
      <video autoPlay loop muted playsInline className='absolute h-screen video-bg object-cover w-full -z-30 '>
        <source src={bgV} type='video/mp4' />
      </video>
      <div className='banner  h-screen    flex items-center justify-center '>


        <div className='z-20 text-white text-center uppercase px-5'>
          <div className='mb-5'>
            <h5 className='md:text-md sm:text-sm text-xs mb-2'>Bycycle Soul Manufacturing</h5>
            <h1 className='text-primary font-bold text-xl sm:text-4xl md:text-6xl'>Promised</h1>
            <h1 className='md:text-6xl sm:text-4xl text-xl mb-2'>for best constituent</h1>
            <i className='italic text-sm'>Since 1997</i>
          </div>
          <div>
            <Link to='whywebest' spy={true} smooth={true} className='uppercase rounded-md btn btn-md bg-gradient-to-r from-primary to-secondary '>explore more</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;