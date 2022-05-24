import React from 'react';

const Skill = () => {
  return (
    <div>
      <div className='py-10 sm:flex gap-5 items-center justify-center sm:text-center sm:px-0 px-5'>
        <div className='sm:w-1/2 mb-5'>
          <h1 className='lg:text-3xl sm:text-2xl text-xl text-primary font-bold uppercase'>Skills:</h1>
          <ul className='md:text-xl text-sm'>
            <li>Expertise - HTML, CSS, JavaScript, React</li>
            <li>Comfortable - Express JS, Every CSS Framework & React Library</li>
            <li>Familiar - Node JS, Python</li>
            <li>Tools - Chrome-dev, Firebase, MongoDB</li>
          </ul>
         
        </div>
        <div className='sm:w-1/2'>
          <h1 className='lg:text-3xl sm:text-2xl text-xl text-primary font-bold uppercase'>Projects:</h1>
          <p className='md:text-xl text-sm'>Latest Three</p>
          <p className='md:text-xl text-sm'><a target='_blank' href="https://health-cure-doctor-s-portal.web.app/" className='link sm:ml-2 text-blue-500'>Health Cure</a></p>
          <p className='md:text-xl text-sm'><a target='_blank' href="https://phone-factor.web.app/" className='link sm:ml-2 text-blue-500'>Phone Factor</a></p>
          <p className='md:text-xl text-sm'><a target='_blank' href="https://take-tutor.netlify.app/" className='link sm:ml-2 text-blue-500'>Take Tutor</a></p>
        </div>
      </div>

    </div>
  );
};

export default Skill;