import React from 'react';
import image from '../../../assets/images/summary-section-image.png'

const ShortDescribe = () => {
  return (
    <div className='container mx-auto'>
      <div class="hero ">
        <div class="hero-content flex-col lg:gap-20 lg:flex-row">
          <img src={image} class=" rounded-lg shadow-2xl" />
          <div className='lg:p-5'>
            <h1 class="sm:text-5xl text-2xl font-bold text-primary">Business With Us</h1>
            <ul class="py-6 capitalize text-md sm:text-lg">
              <li>- Direct From Factory</li>
              <li>- From Our Website</li>
              <li>- Referenced By CEO</li>
              <li>- Single Product(full bycycle only)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortDescribe;