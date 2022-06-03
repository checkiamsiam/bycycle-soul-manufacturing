import React from 'react';
import skills from '../../../assets/images/skills.png'

const Skill = () => {
  return (
    <div className='container mx-auto py-5 p-3'>
      <div class="card lg:card-side  shadow-xl py-10 px-5">
        <figure><img src={skills} alt="skills" className='w-full h-full rounded-md'/></figure>
        <div class="card-body flex lg:justify-center ">
          <div className=' mb-5'>
            <h1 className='lg:text-3xl sm:text-2xl text-xl text-primary font-bold uppercase'>Skills:</h1>
            <ul className='md:text-xl text-sm'>
              <li>Expertise - HTML, CSS, JavaScript, React</li>
              <li>Comfortable - Express JS, Every CSS Framework & React Library</li>
              <li>Familiar - Node JS, Python</li>
              <li>Tools - Chrome-dev, Firebase, MongoDB</li>
            </ul>

          </div>
        </div>
      </div>
      {/* <div className=' sm:flex gap-5 items-center justify-center sm:text-center sm:px-0 px-5'>

        <div className='sm:w-1/2'>
          <h1 className='lg:text-3xl sm:text-2xl text-xl text-primary font-bold uppercase'>Projects:</h1>
          <p className='md:text-xl text-sm'>Latest Three</p>
          <p className='md:text-xl text-sm'><a target='_blank' href="https://health-cure-doctor-s-portal.web.app/" className='link sm:ml-2 text-blue-500'>Health Cure</a></p>
          <p className='md:text-xl text-sm'><a target='_blank' href="https://phone-factor.web.app/" className='link sm:ml-2 text-blue-500'>Phone Factor</a></p>
          <p className='md:text-xl text-sm'><a target='_blank' href="https://take-tutor.netlify.app/" className='link sm:ml-2 text-blue-500'>Take Tutor</a></p>
        </div>
      </div> */}

    </div>
  );
};

export default Skill;