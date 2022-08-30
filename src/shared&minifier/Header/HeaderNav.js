import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import HeaderDrawer from './HeaderDrawer';
import logo from '../../assets/logo/logo.png'
import './Header.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const HeaderNav = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [transparent, setTransparent] = useState(true)
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);


  const firstLetter = user?.displayName?.slice(0, 1);
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
    if (window.scrollY > 50) {

      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }

  const [hideness, setHideness] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setHideness(true);
    } else {
      setHideness(false);
    }
  }

  window.addEventListener('scroll', controlNavbar);

  window.addEventListener('scroll', controlNavbar1);
  window.addEventListener('scroll', controlNavbar2);

  const hadleLogout = async () => {
    await signOut(auth)
    await localStorage.removeItem('accessToken')
    await navigate('/')
  }

  

  return (
    <div className={`${hideness ? 'fixed' : 'sticky'} top-0 showNav ${show && 'hideNav'} ${transparent ? 'bg-transparent' : 'bg-white shadow-lg'}  z-50`}>
      <div className="navbar  container mx-auto ">
        <div className="navbar-start">
          <Link to='/' className='flex items-center transition duration-1000 text-primary hover:text-secondary'>
            <img className='sm:w-12 w-8 mr-2' src={logo} alt="" />
            <div className='font-semibold'>
              <p className="normal-case sm:text-2xl text-lg">ByCycle Soul</p>
              <p className="sm:text-sm text-xs sm:text-neutral">Manufacturing</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 uppercase font-semibold">
            <li className='transition duration-200 text-accent hover:text-primary'><NavLink to='/'>home</NavLink></li>
            <li className='transition duration-200 text-accent hover:text-primary'><NavLink to='/about'>about us</NavLink></li>
            <li className='transition duration-200 text-accent hover:text-primary'><NavLink to='/allParts'>Shop</NavLink></li>
            <li className='transition duration-200 text-accent hover:text-primary'><NavLink to='/blogs'>blogs</NavLink></li>
            <li className='transition duration-200 text-accent hover:text-primary'><NavLink to='/contact'> contacts</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          {user ? <div className="dropdown dropdown-end ">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              {user?.photoURL ? <div className="w-9 rounded-full">
                <img src={user?.photoURL} alt='' />
              </div>
                :
                <div className="avatar placeholder">
                  <div className="bg-primary-focus text-neutral-content rounded-full w-9">
                    <span className="text-3xl">{firstLetter}</span>
                  </div>
                </div>}
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li className='text-center text-primary '>{user?.displayName}</li>
              <li className='text-center mb-2 text-primary'>{user?.email}</li>
              <li className='text-accent'><Link to="/profile">Profile</Link></li>
              <li className='text-accent'><Link to="/dashboard">Dashboard</Link></li>
              <li className='text-accent'><Link to="/settings">Settings</Link></li>
              <li onClick={hadleLogout} className='text-accent'><button>Logout</button></li>
            </ul>
          </div>
            :

            <div className="md:ml-5">
              <Link to='/login' className="md:text-lg btn btn-ghost text-xs link text-primary ">Login<span className='sm:block hidden'>/Register</span></Link>
            </div>}

          <button onClick={toggleDrawer} className="btn btn-ghost lg:hidden">
            <IoMenu className='text-3xl text-primary' />
          </button>

        </div>
        <HeaderDrawer isOpen={isOpenDrawer} toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
};

export default HeaderNav;