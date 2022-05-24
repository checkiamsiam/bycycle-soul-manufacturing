import React from 'react';

const Parts = () => {
  return (
    <div className='container mx-auto py-5'>
      <h1 className='text-primary text-center text-4xl uppercase my-5'>Our Products</h1>
      <div className='grid sm:grid-cols-2  grid-cols-1 gap-5'>
        <div class="card lg:card-side bg-base-100 shadow-xl mx-3 relative">
          <figure className='lg:w-1/2'><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" className='rounded h-full' /></figure>
          <div class="card-body">
            <h2 class="card-title"><span className='font-semibold'>Name:</span></h2>
            <div>
              <p><span className='font-semibold uppercase'>Available quantity:</span></p>
              <p><span className='font-semibold uppercase'>minimum order:</span></p>
              <p><span className='font-semibold uppercase'>price:</span></p>
              <p><span className='font-semibold uppercase'>Description:</span></p>
            </div>
            <div class="card-actions  justify-center absolute bottom-5 ">
              <button class="btn  rounded-md btn-sm md:btn bg-gradient-to-r from-primary to-secondary">PLACE ORDER</button>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" className='rounded h-full' /></figure>
          <div class="card-body">
            <h2 class="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" className='rounded h-full' /></figure>
          <div class="card-body">
            <h2 class="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts;