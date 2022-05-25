import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './login.css'
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useAddUser from '../../hooks/useAddUser'
import Loading from '../../shared&minifier/Loading/Loading';


const Login = () => {


  let navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user2,
    loading3,
    error2,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending2, , error3] = useSendPasswordResetEmail(auth);
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  let from = location.state?.from?.pathname || "/";;


  const [token] = useAddUser(user1 || user2)

  useEffect(() => {

    if (token) {
      navigate(from, { replace: true });
    }

  }, [token])


  if (loading1 || loading3 || sending2) {
    return <Loading></Loading>
  }


  if (error1 || error2 || error3) {
    console.log(error1 || error2 || error3);
  }



  const handleLogin = ({ email, password }) => {
    signInWithEmailAndPassword(email, password);

  }

  const handleResetPass = async () => {
    const email = getValues('email')
    await sendPasswordResetEmail(email)
    await toast.success('Password reset-able mail sent')
  }

  return (
    <div className="login relative min-h-screen bg-gray-100 flex items-center lg:py-32 py-20 bg-logsin bg-center bg-cover bg-no-repeat bg-fixed">
      <div className="container mx-auto  max-w-md shadow-md hover:shadow-lg transition duration-300 md:mt-0 z-20">
        <div className=" p-5 sm:m-0 m-3 bg-white rounded-xl">
          <h1 className='text-primary text-center font-bold mb-5 text-3xl'>Login</h1>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="email">Email:</label>
              <input type="email" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Email" {...register("email", { required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ })} />
            </div>
            <div>
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="password">Password:</label>
              <input type="password" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
            </div>

            <span onClick={handleResetPass} className="text-sm test-neutral inline-block  hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">Forget Password?</span>
            {(errors.email || errors.password || error2) && <p className='text-sm text-error text-center'>invalid email or password. try again</p>}
            <button type='submit' className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">LOGIN</button>
          </form>
          <h1 className='text-center mt-3 text-neutral'>Don't have any account? <Link to="/signup" className='text-accent hover:underline  font-semibold'>Create New</Link></h1>
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

export default Login;