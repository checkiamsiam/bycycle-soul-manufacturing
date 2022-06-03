import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../shared&minifier/Loading/Loading';

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleReview = (data) => {
    const postData = { name: user?.displayName, img: user?.photoURL, rating: parseInt(data?.rating), reviewed: data?.text }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Barer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(postData)
    };
    fetch('https://bycycle-soul-server.herokuapp.com/reviews', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data?.acknowledged) {
          toast.success('Review success-full')
          reset()
        }
      });
  }

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className=' my-5 '>
        <h1 className='text-center text-accent italic'>Add Review</h1>
        <div className='text-left flex justify-center'>
          <form onSubmit={handleSubmit(handleReview)}>

            <div className="mb-6 ">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="email">Rating:</label>
              <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Rating" {...register("rating", { required: true, min: 1, max: 5 })} />
              {errors.rating?.type === 'required' && <p className='text-sm text-error text-center'>Rating is't given</p>}
              {((errors.rating?.type === 'min') || (errors.rating?.type === 'max')) && <p className='text-sm text-error text-center'>Rating needed out of 5</p>}
            </div>

            <div>
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="password">Message:</label>
              <input type="text" className="border bg-gray-100 py-10 px-4 w-full input-lg outline-none focus:ring-2 focus:ring-indigo-400 rounded text-sm" placeholder="text" {...register("text", { required: true })} />
              {errors.text?.type === 'required' && <p className='text-sm text-error text-center'>Review text in needed</p>}
            </div>

            <button type='submit' className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">ADD REVIEW</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;