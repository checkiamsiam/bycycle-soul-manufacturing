import React from 'react';
import Drawer from 'react-modern-drawer'
import { BsTelephoneFill } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import 'react-modern-drawer/dist/index.css'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HeaderDrawer = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction='right'
    >
      <div>
        <span onClick={toggleDrawer} className='border-2 border-neutral btn btn-ghost rounded-full text-2xl absolute top-1 right-1'>  <AiOutlineClose /></span>
        <div  className='flex mt-20 mb-10 justify-center'>
          <ul class="flex flex-col gap-5 uppercase font-semibold">
            <li className={'transition duration-200  hover:text-primary'}><Link to=''>home</Link></li>
            <li className={'transition duration-200  hover:text-primary'}><Link to=''> tools</Link></li>
            <li className={'transition duration-200  hover:text-primary'}><Link to='/blogs'>blogs</Link></li>
            <li className={'transition duration-200  hover:text-primary'}><Link to='/contacts'> contact</Link></li>
            <li className={'transition duration-200  hover:text-primary'}><Link to='/portfolio'>portfolio</Link></li>
          </ul>
        </div>
        <div className=''>
          <div className='flex  flex-col'>
            <div className='flex items-center justify-center cursor-pointer transition duration-500 hover:text-primary text-black'><BsTelephoneFill className='text-primary' />+8801910072661</div>
            <div className='flex items-center justify-center cursor-pointer transition duration-500 hover:text-primary text-black'><BiMailSend className='text-xl mr-1 text-primary' />issiam02415@gmail.com</div>
          </div>
          <div className='flex justify-center gap-5 items-center py-5'>
            <a href="" target="_blank" className='hover:bg-neutral p-2 rounded-full'><FaFacebookF className='text-primary' /></a>
            <a href="" target="_blank" className='hover:bg-neutral p-2 rounded-full'><FaTwitter className='text-primary' /></a>
            <a href="" target="_blank" className='hover:bg-neutral p-2 rounded-full'><FaYoutube className='text-primary' /></a>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default HeaderDrawer;