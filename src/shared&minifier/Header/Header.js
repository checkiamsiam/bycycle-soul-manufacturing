import React, { useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import HeaderNav from './HeaderNav';




const Header = () => {
  const [hideness, setHideness] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setHideness(true);
    } else {
      setHideness(false);
    }
  }
  window.addEventListener('scroll', controlNavbar);

  return (
    <div className='fixed top-0 w-full bg-transparent z-50'>
      <div className={`${hideness && 'hideNav' } transition duration-500 lg:block hidden py-2`}>
        <div className='container mx-auto flex justify-between'>
          <div className='flex gap-5'>
            <div className='flex items-center cursor-pointer transition duration-500 hover:text-primary text-accent'><BsTelephoneFill className='text-primary' />+8801910072661</div>
            <div className='flex items-center cursor-pointer transition duration-500 hover:text-primary text-accent'><BiMailSend className='text-xl mr-1 text-primary' />soulmanufacture@hotmail.com</div>
          </div>
          <div className='flex gap-5 items-center '>
            <a href="" target="_blank" className='hover:bg-neutral p-2 rounded-full'><FaFacebookF className='text-primary' /></a>
            <a href="" target="_blank" className='hover:bg-neutral p-2 rounded-full'><FaTwitter className='text-primary' /></a>
            <a href="" target="_blank" className='hover:bg-neutral p-2 rounded-full'><FaYoutube className='text-primary' /></a>
          </div>
        </div>
      </div>
      <hr />
      <HeaderNav></HeaderNav>
    </div>
  );
};

export default Header;