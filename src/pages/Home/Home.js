import React from 'react';
import Banner from './Banner/Banner';
import BuisnessSumarry from './BuisnessSummary/BuisnessSumarry';
import Review from './Review/Review';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <BuisnessSumarry></BuisnessSumarry>
      <Review></Review>
    </>
  );
};

export default Home;