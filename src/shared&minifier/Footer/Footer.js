import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-base-content">
        <div>
          <Link to='/' className='flex items-center transition duration-1000 text-primary hover:text-secondary'>
            <img className='sm:w-12 w-8 mr-2' src={logo} alt="" />
            <div className='font-semibold'>
              <p className="normal-case sm:text-2xl text-lg">ByCycle Soul</p>
              <p className="sm:text-sm text-xs text-black">Manufacturing</p>
            </div>
          </Link>
          <p>Providing ByCycle tech From 1997</p>
        </div>
        <div>
          <span className="footer-title text-primary">Services</span>
          <a className="link link-hover">Manufacturing</a>
          <a className="link link-hover">Selling</a>
          <a className="link link-hover">Shipping</a>
        </div>
        <div>
          <span className="footer-title text-primary">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title text-primary">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-neutral text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Bycycle Soul ltd.</p>
          <p>Developed By <Link to="/portfolio" className='text-primary link link-hover'>Sheikh Shahariar Siam</Link></p>
        </div>
      </footer></>
  );
};

export default Footer;