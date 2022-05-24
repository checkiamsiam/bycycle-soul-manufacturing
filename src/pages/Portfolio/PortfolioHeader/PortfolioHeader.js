import React from 'react';
import dp from '../../../assets/images/users-avatar/siam.png'
const PortfolioHeader = () => {
  return (
    <div>
      <div className='py-10 flex gap-5 items-center justify-center'>
        <div className='w-1/3'> <img src={dp} alt="" /></div>
        <div className='w-2/3'>
        <h1 className='lg:text-6xl sm:text-4xl text-3xl text-primary'>Sheikh Shahariar Siam</h1>
        <p className='md:text-xl text-lg'>Junior Front-End Developer</p>
        </div>
      </div>

    </div>
  );
};

export default PortfolioHeader;