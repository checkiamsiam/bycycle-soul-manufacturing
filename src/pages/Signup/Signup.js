import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import '../Login/login.css'
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import useAddUser from '../../hooks/useAddUser';
import Loading from '../../shared&minifier/Loading/Loading';

const SignUp = () => {

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [agree, setAgree] = useState(false);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user2,
    loading2,
    error2,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error3] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, error5] = useSendEmailVerification(auth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [token] = useAddUser(user1 || user2 )


  useEffect(() => {

    if (token) {
      navigate(from, { replace: true });
    }

  }, [token , from , navigate])

  const handleAgreeTerms = () => {
    setAgree(!agree)
  }

  if (loading1 || loading2 || updating || sending) {
    return <Loading></Loading>
  }

  
  if (error1 || error2 || error5 || error3) {
    console.log(error1 || error2 || error5 || error3);
  }



  const handleRegister = (data) => {
    const {name , email , password , profile} = data ;
    const formData = new FormData();
    formData.append('image', profile[0]);


    fetch(`https://api.imgbb.com/1/upload?key=c25e76a1eeaf524a6df2aed69f003c9d`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(async data => {
        if (data.success) {
          await createUserWithEmailAndPassword(email, password)
          await updateProfile({ displayName: name , photoURL: data?.data?.url })
          await sendEmailVerification();
          await toast('Email Verification Sent')
        } else {
          toast.error('Image upload Failed')

        }
      })

  }



  return (
    <div className=" signup relative bg-gray-100 flex items-center lg:py-32 py-20 bg-logsin bg-no-repeat bg-fixed bg-center bg-cover ">
      <div className="container mx-auto  max-w-md shadow-md hover:shadow-lg transition duration-300 md:mt-0 z-20">
        <div className=" p-5 sm:m-0 m-3 bg-white rounded-xl">
          <h1 className='text-primary text-center font-bold mb-5 text-3xl'>REGISTER</h1>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Name:</label>
              <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Name" {...register("name", { required: true, maxLength: 23 })} />
              {errors.name?.type === 'required' && <p className='text-sm text-error text-center'>Name is required</p>}
              {errors.name?.type === 'maxLength' && <p className='text-sm text-error text-center'>Your name is to large</p>}
            </div>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Your Photo:</label>
              <input type="file" id='dp' name='dp' className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your DP"
                {...register("profile", { required: true })} />
              {errors.profile?.type === 'required' && <p className='text-sm text-error text-center'>Need a profile photo</p>}
            </div>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="email">Email:</label>
              <input type="email" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Email" {...register("email", { required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ })} />
              {errors.email?.type === 'required' && <p className='text-sm text-error text-center'>Email must require</p>}
              {errors.email?.type === 'pattern' && <p className='text-sm text-error text-center'>Invalid Email</p>}
            </div>
            <div>
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="password">Password:</label>
              <input type="password" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
              {errors.password?.type === 'required' && <p className='text-sm text-error text-center'>Password field is empty</p>}
              {errors.password?.type === 'minLength' && <p className='text-sm text-error text-center'>Password is to weak add another</p>}
            </div>

            <div className='mt-2 flex items-center gap-2'>
              <input onChange={handleAgreeTerms} type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
              <span className="label-text text-neutral">Agree terms and conditions</span>
            </div>

            <button type='submit' disabled={!agree} className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">REGISTER</button>
          </form>
          <h1 className='text-center mt-3 text-neutral'>Already have an account? <Link to="/login" className='text-accent hover:underline font-semibold'>Just Log in</Link></h1>
          <div className="divider">With Social</div>
          <div className="flex flex-col w-full lg:flex-row">

            <button onClick={() => signInWithGoogle()} className="btn  btn-ghost border-black border-2  w-full gap-2 text-neutral  lg:px-6 hover:text-primary">
              <FcGoogle />
              Google
            </button>


          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;