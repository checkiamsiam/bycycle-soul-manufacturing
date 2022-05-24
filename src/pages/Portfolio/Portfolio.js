import React from 'react';
import PortfolioContact from './PortfolioContact/PortfolioContact';
import PortfolioHeader from './PortfolioHeader/PortfolioHeader';
import Skill from './Skill/Skill';

const Portfolio = () => {
  return (
    <div className='md:mt-28 mt-20 container mx-auto'>
      <PortfolioHeader></PortfolioHeader>
      <PortfolioContact></PortfolioContact>
      <Skill></Skill>
    </div>
  );
};

export default Portfolio;