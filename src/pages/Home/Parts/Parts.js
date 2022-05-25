import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const Parts = () => {
  const { isLoading, error, data } = useQuery('partsData', () => axios.get('http://localhost:5000/parts')
  )

  return (
    <div className='container mx-auto py-5'>
      <h1 className='text-primary text-center text-4xl uppercase my-5'>Our Products</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5'>
        {data?.data?.map(p => <div class=" h-screen mx-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  overflow-hidden hover:shadow-orange-200">
          <div className='overflow-hidden w-full h-1/2 '>
            <img class="rounded-t-lg w-full h-full  transition duration-500 hover:scale-110" src={p?.img} alt="" />
          </div>
          <div class="p-5 ">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{p?.name}</h5>
            </div>

            <div className='flex flex-col justify-between'>
              <div>
                <p><span className='font-semibold uppercase'>Available quantity: {p?.available}</span></p>
                <p><span className='font-semibold uppercase'>minimum order: {p?.minOrdQnt}</span></p>
                <p><span className='font-semibold uppercase'>price: ${p?.price}</span></p>
                <p><span className='font-semibold uppercase '>Description:</span> <span className='text-lg'>{p?.dis.slice(0, 100)}</span></p>
              </div>

              <div className=' w-full mt-5 '>
                <button class="btn  rounded-md btn-sm md:btn bg-gradient-to-r from-primary to-secondary w-full">BUY NOW</button>
              </div>
            </div>

          </div>
        </div>)}


      </div>
    </div>
  );
};

export default Parts;