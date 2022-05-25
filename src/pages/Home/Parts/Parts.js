import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const Parts = () => {
  const { isLoading, error, data } = useQuery('partsData', () => axios.get('http://localhost:5000/parts')
  )

  return (
    <div className='container mx-auto py-5'>
      <h1 className='text-primary text-center text-4xl uppercase my-5'>Our Products</h1>
      <div className='grid sm:grid-cols-2  grid-cols-1 gap-5'>
        {data?.data?.map(p => <div class="card  bg-base-100 shadow-xl mx-3 relative h-screen">
          <figure className=' h-1/3 md:h-1/2 overflow-hidden'><img src={p?.img} alt="Album" className='rounded w-full' h-full /></figure>
          <div class="card-body">
            <h2 class="card-title"><span className='font-semibold'>Name: {p?.name}</span></h2>
            <div>
              <p><span className='font-semibold uppercase'>Available quantity: {p?.available}</span></p>
              <p><span className='font-semibold uppercase'>minimum order: {p?.minOrdQnt}</span></p>
              <p><span className='font-semibold uppercase'>price: {p?.price}</span></p>
              <p><span className='text-sm'>{p?.description
              }</span></p>
            </div>
            <div class="card-actions  justify-center absolute bottom-5 ">
              <button class="btn  rounded-md btn-sm md:btn bg-gradient-to-r from-primary to-secondary">BUY NOW</button>
            </div>
          </div>
        </div>)}

      </div>
    </div>
  );
};

export default Parts;