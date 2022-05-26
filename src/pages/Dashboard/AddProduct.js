import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const handleAddProduct = data => {
    console.log(data);
    const { name, image, dis, quantity, minOrdQuantity, price } = data;
    const formData = new FormData();
    formData.append('image', image[0]);



    fetch(`https://api.imgbb.com/1/upload?key=c25e76a1eeaf524a6df2aed69f003c9d`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(async data => {
        if (data.success) {
          const postItem = { name, img: data?.data?.url, minOrdQnt: parseInt(minOrdQuantity), available: parseInt(quantity), price: parseInt(price), dis };

          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authorization': `Barer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(postItem)
          };
          fetch('http://localhost:5000/parts', requestOptions)
            .then(response => response.json())
            .then(data => {
              if (data?.acknowledged) {
                toast.success('Product added success-full')
                reset()
              }
            });

          console.log(postItem);

        } else {
          toast.error('Image upload Failed')

        }
      })
  }


  return (
    <div className=' my32-5'>
      <h1 className='text-center text-accent italic'>Add Product</h1>
      <div className=' text-left flex justify-center py-5'>
        <form onSubmit={handleSubmit(handleAddProduct)} className=" w-4/5">
          <div className="mb-6">
            <label className="mr-4 font-bold inline-block mb-2 text-accent " htmlFor="text">Product Name:</label>
            <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Name" {...register("name", { required: true })} />
            {errors.name?.type === 'required' && <p className='text-sm text-error text-center'>Name is required</p>}
          </div>
          <div className="mb-6">
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Product's Photo:</label>
            <input type="file" id='dp' name='dp' className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your DP"
              {...register("image", { required: true })} />
            {errors.image?.type === 'required' && <p className='text-sm text-error text-center'>Need a Product photo</p>}
          </div>
          <div className="mb-6">
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="email">Price (per unit):</label>
            <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Email" {...register("price", { required: true })} />
            {errors.price?.type === 'required' && <p className='text-sm text-error text-center'>price filed is empty</p>}
          </div>
          <div className="mb-6">
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="email">Adding Quantity:</label>
            <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Email" {...register("quantity", { required: true })} />
            {errors.quantity?.type === 'required' && <p className='text-sm text-error text-center'>Enter the amount of this product</p>}
          </div>
          <div>
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="number">Minimum Order:</label>
            <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Password" {...register("minOrdQuantity", { required: true })} />
            {errors.minOrdQuantity?.type === 'required' && <p className='text-sm text-error text-center'>Field need to be fill up</p>}
          </div>
          <div>
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="password">Description:</label>
            <input type="text" className="border bg-gray-100 py-10 px-4 w-full input-lg outline-none focus:ring-2 focus:ring-indigo-400 rounded text-sm" placeholder="text" {...register("dis", { required: true })} />
            {errors.dis?.type === 'required' && <p className='text-sm text-error text-center'>Product description needed </p>}
          </div>

          <button type='submit' className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">Click To Add</button>
        </form>
      </div>
    </div>

  );
};

export default AddProduct;