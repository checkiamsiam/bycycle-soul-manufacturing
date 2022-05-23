import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'

const Footer = () => {
  return (
    <>
    <footer class="footer p-10 bg-neutral text-base-content">
      <div>
        <Link to='/' className='flex items-center transition duration-1000 text-primary hover:text-secondary'>
          <img className='sm:w-12 w-8 mr-2' src={logo} alt="" />
          <div className='font-semibold'>
            <p class="normal-case sm:text-2xl text-lg">ByCycle Soul</p>
            <p class="sm:text-sm text-xs text-black">Manufacturing</p>
          </div>
        </Link>
        <p>Providing ByCycle tech From 1992</p>
      </div>
      <div>
        <span class="footer-title text-primary">Services</span>
        <a class="link link-hover">Manufacturing</a>
        <a class="link link-hover">Selling</a>
        <a class="link link-hover">Shipping</a>
      </div>
      <div>
        <span class="footer-title text-primary">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
      </div>
      <div>
        <span class="footer-title text-primary">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
      </div>
    </footer>
    <footer class="footer footer-center p-4 bg-neutral text-base-content">
    <div>
      <p>Copyright © 2022 - All right reserved by Bycycle Soul ltd.</p>
      <p>Developed By <a href="" className='text-primary link link-hover'>Sheikh Shahariar Siam</a></p>
    </div>
  </footer></>
  );
};

export default Footer;