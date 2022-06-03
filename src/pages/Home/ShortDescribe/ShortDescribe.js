import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import image from '../../../assets/images/summary-section-image.png'

const ShortDescribe = () => {
  return (
    <div className='container mx-auto'>
      <div className="hero ">
        <div className="hero-content flex-col lg:gap-20 lg:flex-row">
          <img src={image} className=" rounded-lg shadow-2xl" />
          <div className='lg:p-5'>
            <h1 className="sm:text-5xl text-2xl font-bold text-primary uppercase">Business with Us</h1>
            <div className="py-6 capitalize text-md sm:text-lg flex flex-col sm:flex-row sm:gap-5">
              <div>
                <p className='flex items-center gap-1 '><AiOutlineCheckCircle className='text-success'/> Direct From Factory</p>
                <p className='flex items-center gap-1 '><AiOutlineCheckCircle className='text-success'/> From Our Website</p>
              </div>
              <div>
                <p className='flex items-center gap-1 '><AiOutlineCloseCircle className='text-error'/> Single Product</p>
                <p className='flex items-center gap-1 '><AiOutlineCheckCircle className='text-success'/> Single Product(full byCycle)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortDescribe;