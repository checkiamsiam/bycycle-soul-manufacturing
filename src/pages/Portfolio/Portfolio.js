import React from 'react';
import PortfolioContact from './PortfolioContact/PortfolioContact';
import PortfolioHeader from './PortfolioHeader/PortfolioHeader';
import Skill from './Skill/Skill';

const Portfolio = () => {
  return (
    <div className='bg-portfolio bg-no-repeat bg-cover bg-center bg-fixed text-white'>
      <div className='md:pt-28 pt-20 container mx-auto '>
      <PortfolioHeader></PortfolioHeader>
      <PortfolioContact></PortfolioContact>
      <Skill></Skill>
    </div>
    </div>
  );
};

export default Portfolio;