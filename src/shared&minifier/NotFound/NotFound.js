import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className=' notFound h-screen flex justify-center items-center bg-notfound bg-cover bg-no-repeat bg-center bg-fixed relative'>
      <div className='z-20'>
        <h1 className='text-primary text-9xl text-center font-extrabold '>4<span className='text-accent'>0</span>4</h1>
        <p className='font-mono text-white text-center'>Page Not Found</p>
        <div className='flex justify-center'>
          <Link to='/' className='text-center mt-5 btn btn-sm btn-error'>Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;