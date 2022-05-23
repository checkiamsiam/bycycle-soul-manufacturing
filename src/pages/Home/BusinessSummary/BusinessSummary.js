import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';
import { FaToolbox } from 'react-icons/fa';
import { MdSell } from 'react-icons/md';

const BusinessSummary = () => {
  return (
    <div className='container mx-auto'>
      <div class="grid py-10 gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">

        <div class="flex justify-evenly items-center shadow-md rounded-md hover:shadow-secondary hover:shadow-sm p-3">
          <div class=" text-primary w-1/3">
            <FaShippingFast className='text-7xl transition duration-300 cursor-pointer hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
            <div class="stat-title text-success">Shipping Nationally</div>
            <div class="stat-value text-accent">30+ </div>
            <div class="stat-value">District</div>
          </div>
        </div>
        <div class="flex justify-evenly items-center shadow-md rounded-md hover:shadow-secondary hover:shadow-sm  p-3">
          <div class="w-1/3 text-primary">
            <FaUserCog className='text-7xl transition duration-300 cursor-pointer hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
            <div class="stat-title text-success">Customer</div>
            <div class="stat-value text-accent">100+ </div>
            <div class="stat-value">Partys</div>
          </div>
        </div>
        <div class="flex justify-evenly items-center shadow-md rounded-md hover:shadow-secondary hover:shadow-sm  p-3">
          <div class="w-1/3 text-primary">
            <MdSell className='text-7xl transition duration-300 cursor-pointer hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
            <div class="stat-title text-success">Transition</div>
            <div class="stat-value text-accent">10+</div>
            <div class="stat-value">Bank Service</div>
          </div>
        </div>
        <div class="flex justify-evenly items-center shadow-md rounded-md hover:shadow-secondary hover:shadow-sm  p-3">
          <div class="w-1/3 text-primary">
            <FaToolbox className='text-7xl transition duration-300 cursor-pointer hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
            <div class="stat-title text-success">Servicing</div>
            <div class="stat-value text-accent">20+</div>
            <div class="stat-value">Mechanics</div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default BusinessSummary;