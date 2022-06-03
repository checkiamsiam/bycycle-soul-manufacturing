import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import bg from '../../assets/images/space.png'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../../shared&minifier/Loading/Loading';
import useAllUser from '../../hooks/UseAllUser';


const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isLoading, allUser, refetch } = useAllUser(user);
  const currentUser = allUser?.find(u => u?.email === user?.email)
  console.log(currentUser);
  if (updating || loading) {
    return <Loading></Loading>
  }


  const upsertData = (body) => {
    fetch(`https://bycycle-soul-server.herokuapp.com/users?email=${currentUser?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => refetch())
  }

  const update = (data) => {
    const { name, profile, education, phone, adress, likedin } = data;
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
    if (education) {
      upsertData({ education })
    }
    if (phone) {
      upsertData({ phone })
    }
    if (adress) {
      upsertData({ adress })
    }
    if (likedin) {
      upsertData({ likedin })
    }
    toast('Progress complete')


  }

  console.log(user);
  return (
    <div className='mx-3 '>
      <h1 className='text-center text-accent italic'>Your Profile</h1>
      <div className=''>
        <div className="  relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
          <div className="top h-64 w-full bg-blue-600 overflow-hidden relative" >
            <img src={bg} alt="" className="bg w-full h-full object-cover object-center absolute z-0" />
            <label for="update-photo-name" className="btn btn-warning absolute top-2 right-2 z-10 modal-button">Edit</label>

            <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
              <img src={user?.photoURL} className="h-24 w-24 object-cover rounded-full" />
              <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
              <h1 className="text-sm font-semibold">{user?.email}</h1>
              <h4 className="text-sm font-semibold">Joined Since {user?.metadata?.creationTime}</h4>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto ">
              <table className="table w-full">

                <tbody>

                  <tr>

                    <td className='font-bold'>Education:</td>
                    <td>{currentUser?.education}</td>
                    <td>
                      <label for="update-education" className="link z-10 modal-button">Edit</label>
                    </td>

                  </tr>

                  <tr>

                    <td className='font-bold'>Location:</td>
                    <td>{currentUser?.adress}</td>
                    <td>
                      <label for="update-adress" className="link z-10 modal-button">Edit</label>
                    </td>
                  </tr>

                  <tr>

                    <td className='font-bold'>Phone:</td>
                    <td>{currentUser?.phone}</td>
                    <td>
                      <label for="update-phone" className="link z-10 modal-button">Edit</label>
                    </td>
                  </tr>
                  <tr>

                    <td className='font-bold'>LinkedIn:</td>
                    <td >{currentUser?.likedin}</td>
                    <td>
                      <label for="update-linkedin" className="link z-10 modal-button">Edit</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      <input type="checkbox" id="update-photo-name" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label for="update-photo-name" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(update)}>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Name:</label>
              <input type="text" defaultValue={user?.displayName} className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Name" {...register("name", { maxLength: 23 })} />
              {errors.name?.type === 'maxLength' && <p className='text-sm text-error text-center'>Your name is to large</p>}
            </div>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Photo</label>
              <input type="file" id='dp' name='dp' className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your DP"
                {...register("profile")} />
            </div>





            <button type='submit' className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">Update</button>
          </form>
        </div>
      </div>

      <input type="checkbox" id="update-education" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label for="update-education" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(update)}>

            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Education:</label>
              <input defaultValue={currentUser?.education} type="text" id='dp' name='dp' className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Educations"
                {...register("education")} />
            </div>


            <button type='submit' className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">Update</button>
          </form>
        </div>
      </div>

      <input type="checkbox" id="update-adress" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label for="update-adress" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(update)}>

            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Adress:</label>
              <input defaultValue={currentUser?.adress} type="text" id='dp' name='dp' className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Adress"
                {...register("adress")} />
            </div>


            <button type='submit' className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">Update</button>
          </form>
        </div>
      </div>

      <input type="checkbox" id="update-phone" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label for="update-phone" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(update)}>

            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Phone:</label>
              <input defaultValue={currentUser?.phone} type="text" id='dp' name='dp' className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Phone Number"
                {...register("phone")} />
            </div>


            <button type='submit' className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">Update</button>
          </form>
        </div>
      </div>

      <input type="checkbox" id="update-linkedin" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label for="update-linkedin" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(update)}>

            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">LinkedIn:</label>
              <input defaultValue={currentUser?.likedin} type="text" id='dp' name='dp' className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="LikedIn Profile Link"
                {...register("likedin")} />
            </div>

            <button type='submit' className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">Update</button>
          </form>
        </div>
      </div>






















    </div>
  );
};

export default Profile;