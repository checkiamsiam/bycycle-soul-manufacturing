import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import HeaderDrawer from './HeaderDrawer';
import logo from '../../assets/logo/logo.png'
import './Header.css'

const HeaderNav = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [transparent, setTransparent] = useState(true)
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState)
  }
  const controlNavbar1 = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar

      setShow(true);
    } else { // if scroll up show the navbar
      setShow(false);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);

  };


  const controlNavbar2 = () => {
    if (window.scrollY > 250) {

      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }

  window.addEventListener('scroll', controlNavbar1);
  window.addEventListener('scroll', controlNavbar2);

  return (
    <div className={` showNav ${show && 'hideNav'} ${transparent ?  'bg-transparent' : 'bg-base-100' } `}>
      <div class="navbar  container mx-auto ">
      <div class="navbar-start">
        <Link to='/' className='flex items-center transition duration-1000 text-primary hover:text-secondary'>
          <img className='sm:w-12 w-8 mr-2' src={logo} alt="" />
          <div className='font-semibold'>
            <p class="normal-case sm:text-2xl text-lg">ByCycle Soul</p>
            <p class="sm:text-sm text-xs sm:text-neutral">Manufacturing</p>
          </div>
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="flex gap-5 uppercase font-semibold">
          <li className={`transition duration-200 ${transparent &&  'text-white' } hover:text-primary`}><Link to=''>home</Link></li>
          <li className={`transition duration-200 ${transparent &&  'text-white' } hover:text-primary`}><Link to=''> about</Link></li>
          <li className={`transition duration-200 ${transparent &&  'text-white' } hover:text-primary`}><Link to=''>tools</Link></li>
          <li className={`transition duration-200 ${transparent &&  'text-white' } hover:text-primary`}><Link to=''> contact</Link></li>
          <li className={`transition duration-200 ${transparent &&  'text-white' } hover:text-primary`}><Link to=''>portfolio</Link></li>
        </ul>
      </div>
      <div class="navbar-end flex items-center">
        <Link to='' class="md:text-lg btn btn-ghost text-xs link text-primary ">Login<span className='sm:block hidden'>/Register</span></Link>
        <button onClick={toggleDrawer} class="btn btn-ghost lg:hidden">
          <IoMenu className='text-3xl text-primary'  />
        </button>

      </div>
      <HeaderDrawer isOpen={isOpenDrawer} toggleDrawer={toggleDrawer} />
    </div>
    </div>
  );
};

export default HeaderNav;