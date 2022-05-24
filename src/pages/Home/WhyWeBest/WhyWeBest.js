import React from 'react';
import './WhyWeBest.css'
import { Link } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';
import { FaLaptopMedical } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi';

const WhyWeBest = () => {
  return (
    <div className='chose-section bg-chosebg md:h-screen bg-cover bg-no-repeat bg-center bg-fixed  flex items-center justify-center relative py-5'>
      <div className='md:flex container mx-auto gap-10 md:px-10 px-5  z-20'>
        <div className='md:w-1/2 flex items-center justify-center'>
          <div>
            <div> <Link to='/' className='flex items-center transition duration-1000 text-primary hover:text-secondary'>
              <div className='font-semibold'>
                <p class="normal-case sm:text-2xl text-lg">ByCycle Soul</p>
                <p class="sm:text-sm text-xs text-neutral">Manufacturing</p>
              </div>
            </Link></div>
            <p className='text-white mt-5 text-xl md:text-2xl italic '>
              ByCycle Soul helps manufacturers maximize the productivity they gain from their bycycle parts like Chain, bell, handle and related supplies. We dedicated to helping our customers andreduce operating costs.
            </p>
          </div>
        </div>
        <div className='md:w-1/2 flex items-center justify-center'>
          <div>
            <div className="cursor-pointer md:p-6 py-6 bg-transparent rounded-lg ">
              <div>
                <h5 className="mb-2 uppercase text-2xl font-bold tracking-tight text-primary dark:text-white flex items-center">
                  <FiUsers className='text-3xl text-primary mr-2' />
                  PROFESSIONALS Mechanical</h5>
                <p className="italic font-normal text-white dark:text-gray-400">Our Mechanic perform a wide range of repairs on bicycles. They can be employed in various types of stores, ranging from large department stores to small local bike shops; cycling teams, or bicycle manufacturers..</p>
              </div>
            </div>
            <div className="cursor-pointer md:p-6 py-6 bg-transparent rounded-lg ">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-accent dark:text-white flex items-center">
                  <FaLaptopMedical className='text-3xl text-accent mr-2' />
                  WE ARE TRUSTED</h5>
                <p className="italic font-normal text-white dark:text-gray-400">We are trusted by thousands of people because our business are happening there from 1971 and we shipping our products every District of Bangladesh</p>
              </div>
            </div>
            <div className="cursor-pointer md:p-6 py-6  bg-transparent rounded-lg ">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white flex items-center">
                  <HiStatusOnline className='text-3xl text-primary mr-2' />
                  WE ARE EXPERTS</h5>
                <p className="italic font-normal text-white dark:text-gray-400">We are expert in our business. many fraud businessman are created now they provide low quality product by showing good quality of product.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeBest;