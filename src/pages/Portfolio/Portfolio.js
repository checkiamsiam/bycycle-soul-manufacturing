import React from 'react';
import PortfolioContact from './PortfolioContact/PortfolioContact';
import PortfolioHeader from './PortfolioHeader/PortfolioHeader';
import Skill from './Skill/Skill';

const Portfolio = () => {
  return (
    <div>
      <div className='md:pt-28 pt-20 text-white bg-portfolio bg-no-repeat bg-cover bg-center bg-fixed'>
        <div className='container mx-auto'>
        <PortfolioHeader></PortfolioHeader>
        <PortfolioContact></PortfolioContact>
        </div>
      </div>
      <Skill></Skill>
    </div>
  );
};

export default Portfolio;