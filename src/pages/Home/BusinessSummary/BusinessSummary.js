import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';
import { FaToolbox } from 'react-icons/fa';
import { MdSell } from 'react-icons/md';

const BusinessSummary = () => {
  return (
    <div className='container mx-auto'>
      <div className="grid py-10 px-3 gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">

        <div className="flex flex-col justify-evenly items-center shadow-md rounded-md transition  duration-300 hover:-translate-y-1 p-3 cursor-pointer ">
          <div className="self-start text-success">Shipping Nationally</div>
          <div className="mb-3 text-primary ">
            <FaShippingFast className='text-9xl transition duration-300 hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>

            <div className="text-center text-accent text-3xl">30+ </div>
            <div className=" text-center text-2xl text-primary">District</div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center shadow-md rounded-md transition  duration-300 hover:-translate-y-1 p-3 cursor-pointer">
          <div className="self-start text-success">Customers</div>
          <div className="mb-3 text-primary">
            <FaUserCog className='text-9xl transition duration-300  hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
            <div className=" text-center text-accent text-3xl">100+ </div>
            <div className=" text-center text-primary text-2xl">Sub Businessman</div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center shadow-md rounded-md transition  duration-300 hover:-translate-y-1  p-3  cursor-pointer">
          <div className="text-success self-start">Transition</div>
          <div className=" mb-3 text-primary">
            <MdSell className='text-9xl transition duration-300 hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>

            <div className="text-accent text-center text-3xl">10+</div>
            <div className=" text-center text-2xl text-primary">Banks</div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center shadow-md rounded-md transition  duration-300 hover:-translate-y-1  p-3  cursor-pointer">
           <div className=" text-success self-start">Servicing</div>
          <div className="mb-3 text-primary">
            <FaToolbox className='text-9xl transition duration-300 hover:bg-neutral p-3 rounded-full' />
          </div>
          <div>
           
            <div className="text-accent text-center text-3xl">20+</div>
            <div className="text-center text-primary text-2xl">Pro Mechanics</div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default BusinessSummary;