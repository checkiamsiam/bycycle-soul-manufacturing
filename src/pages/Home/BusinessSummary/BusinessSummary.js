import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';
import { FaToolbox } from 'react-icons/fa';
import { MdSell } from 'react-icons/md';

const BusinessSummary = () => {
  return (
    <div className='container mx-auto'>
      <div className="grid py-10 px-3 gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">

        <div className="flex justify-evenly items-center shadow-md rounded-md hover:shadow-secondary hover:shadow-sm p-3">
          <div className=" text-primary w-1/3">
            <FaShippingFast className='text-7xl transition duration-300 cursor-pointer hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
            <div className="stat-title text-success">Shipping Nationally</div>
            <div className="stat-value text-accent">30+ </div>
            <div className="stat-value">District</div>
          </div>
        </div>
        <div className="flex justify-evenly items-center shadow-md rounded-md hover:shadow-secondary hover:shadow-sm  p-3">
          <div className="w-1/3 text-primary">
            <FaUserCog className='text-7xl transition duration-300 cursor-pointer hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
            <div className="stat-title text-success">Customer</div>
            <div className="stat-value text-accent">100+ </div>
            <div className="stat-value">Partys</div>
          </div>
        </div>
        <div className="flex justify-evenly items-center shadow-md rounded-md hover:shadow-secondary hover:shadow-sm  p-3">
          <div className="w-1/3 text-primary">
            <MdSell className='text-7xl transition duration-300 cursor-pointer hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
            <div className="stat-title text-success">Transition</div>
            <div className="stat-value text-accent">10+</div>
            <div className="stat-value">Banks</div>
          </div>
        </div>
        <div className="flex justify-evenly items-center shadow-md rounded-md hover:shadow-secondary hover:shadow-sm  p-3">
          <div className="w-1/3 text-primary">
            <FaToolbox className='text-7xl transition duration-300 cursor-pointer hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
            <div className="stat-title text-success">Servicing</div>
            <div className="stat-value text-accent">20+</div>
            <div className="stat-value">Maker</div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default BusinessSummary;