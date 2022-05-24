import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const PortfolioContact = () => {
  return (
    <div className='sm:flex justify-between py-10'>
      <div className='lg:w-1/4 sm:w-2/5 mb-5 '>
        <div  className='flex items-center text-center justify-center'><BsTelephoneFill className='mr-3'/>+8801304421285</div>
        <div className='flex items-center justify-center'><AiTwotoneMail className=' mr-3'/> issiam02415@gmail.com</div>
      </div>
      <div className='lg:w-3/4 sm:w-3/5'>
        <ul className='flex justify-evenly'>
          <li><a href=""><BsGithub className=' rounded-full md:text-6xl text-4xl hover:text-primary transition duration-300 ' /></a></li>
          <li><a href=""><FaLinkedin className='md:text-6xl text-4xl hover:text-primary transition duration-300'  /></a></li>
          <li><a href=""><FaFacebook className='md:text-6xl text-4xl hover:text-primary transition duration-300' /></a></li>
          <li><a href=""><FaTwitterSquare className='md:text-6xl text-4xl hover:text-primary transition duration-300' /></a></li>
          <li><a href=""><FaInstagramSquare className='md:text-6xl text-4xl hover:text-primary transition duration-300' /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioContact;