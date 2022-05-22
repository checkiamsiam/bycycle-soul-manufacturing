import React from 'react';
import image from '../../../assets/images/summary-section-image.png'

const BuisnessSumarry = () => {
  return (
    <div className='container mx-auto'>
      <div class="hero ">
        <div class="hero-content flex-col lg:gap-20 lg:flex-row">
          <img src={image} class=" rounded-lg shadow-2xl" />
          <div className='lg:p-5'>
            <h1 class="sm:text-5xl text-2xl font-bold text-primary">Business Summary</h1>
            <p class="py-6 capitalize text-md sm:text-lg"><span>thanks for visiting our website. our business strategy can be describe shotly by summarize.</span> <br /> first we are manufacture every single peace of bycycle parts. we sell it. there is a minimum quantity for purchasing you cant buy single peace and we also have a service of build-in-bike. our mechanics build full bycyle the we sell this. <br /> thanks for reading...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuisnessSumarry;