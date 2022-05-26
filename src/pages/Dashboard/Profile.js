import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import bg from '../../assets/images/space.png'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../../shared&minifier/Loading/Loading';


const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (updating || loading) {
    return <Loading></Loading>
  }

  const update = (data) => {
    const { name, profile } = data;
    if (profile) {
      const formData = new FormData();
      formData.append('image', profile[0]);


      fetch(`https://api.imgbb.com/1/upload?key=c25e76a1eeaf524a6df2aed69f003c9d`, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(async data => {
          if (data.success) {
            updateProfile({ photoURL: data?.data?.url })
          }
        })
    }
    if (name) {
      updateProfile({ displayName: name })
    }
    toast('Progress complete')
  }

  console.log(user);
  return (
    <div className='mx-3'>
      <h1 className='text-center text-accent italic'>Your Profile</h1>
      <div className=' text-center'>
        <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
          <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
            <img src={bg} alt="" class="bg w-full h-full object-cover object-center absolute z-0" />
            <label for="update-modal" class="btn btn-warning absolute top-2 right-2 z-10 modal-button">Edit</label>

            <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
              <img src={user?.photoURL} class="h-24 w-24 object-cover rounded-full" />
              <h1 class="text-2xl font-semibold">{user?.displayName}</h1>
              <h1 class="text-sm font-semibold">{user?.email}</h1>
              <h4 class="text-sm font-semibold">Joined Since {user?.metadata?.creationTime}</h4>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="update-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
        <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(update)}>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">New Name</label>
              <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Name" {...register("name", { maxLength: 23 })} />
              {errors.name?.type === 'maxLength' && <p className='text-sm text-error text-center'>Your name is to large</p>}
            </div>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Select Photo</label>
              <input type="file" id='dp' name='dp' className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your DP"
                {...register("profile")} />
            </div>

            <button type='submit' className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;