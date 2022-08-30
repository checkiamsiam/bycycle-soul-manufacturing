import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../shared&minifier/Loading/Loading';

const Parts = () => {
  const navigate = useNavigate();
  const { data: latest } = useQuery('partsDataLatest', () => axios.get('https://bycycle-soul-server.herokuapp.com/partsLatest')
  )

  const latestProductLg = latest?.data?.slice(0, 6)
  const latestProductSm = latest?.data?.slice(0, 3)


  return (
    <div className='container mx-auto py-5'>

      <div>
        <h1 className='text-primary text-center text-4xl uppercase my-5'>Latest Product</h1>
        <div className='md:block hidden'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5  '>
          {latestProductLg?.map(p => <div key={p._id} className=" h-screen mx-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  overflow-hidden hover:shadow-orange-200">
            <div className='overflow-hidden w-full h-1/2 '>
              <img className="rounded-t-lg w-full h-full  transition duration-500 hover:scale-110" src={p?.img} alt="" />
            </div>
            <div className="p-5 ">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{p?.name}</h5>
              </div>

              <div className='flex flex-col justify-between'>
                <div>
                  <p><span className='font-semibold uppercase'>Available quantity: {p?.available}</span></p>
                  <p><span className='font-semibold uppercase'>minimum order: {p?.minOrdQnt}</span></p>
                  <p><span className='font-semibold uppercase'>price: ${p?.price}</span></p>
                  <p><span className='font-semibold uppercase '>Description:</span> <span className='text-lg'>{p?.dis.slice(0, 100)}</span></p>
                </div>

                <div className=' w-full mt-5 '>
                  <button onClick={() => navigate(`/purchase/${p._id}`)} className="btn  rounded-md btn-sm md:btn bg-gradient-to-r from-primary to-secondary w-full">TO BUY NOW</button>
                </div>
              </div>

            </div>
          </div>)}
        </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:hidden '>
          {latestProductSm?.map(p => <div key={p._id} className=" h-screen mx-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  overflow-hidden hover:shadow-orange-200">
            <div className='overflow-hidden w-full h-1/2 '>
              <img className="rounded-t-lg w-full h-full  transition duration-500 hover:scale-110" src={p?.img} alt="" />
            </div>
            <div className="p-5 ">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{p?.name}</h5>
              </div>

              <div className='flex flex-col justify-between'>
                <div>
                  <p><span className='font-semibold uppercase'>Available quantity: {p?.available}</span></p>
                  <p><span className='font-semibold uppercase'>minimum order: {p?.minOrdQnt}</span></p>
                  <p><span className='font-semibold uppercase'>price: ${p?.price}</span></p>
                  <p><span className='font-semibold uppercase '>Description:</span> <span className='text-lg'>{p?.dis.slice(0, 100)}</span></p>
                </div>

                <div className=' w-full mt-5 '>
                  <button onClick={() => navigate(`/purchase/${p._id}`)} className="btn  rounded-md btn-sm md:btn bg-gradient-to-r from-primary to-secondary w-full">TO BUY NOW</button>
                </div>
              </div>

            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Parts;