import React from 'react';
import Banner from './Banner/Banner';
import ShortDescribe from './ShortDescribe/ShortDescribe';
import Review from './Review/Review';
import BusinessSummary from './BusinessSummary/BusinessSummary';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <Review></Review>
      <ShortDescribe></ShortDescribe>
    </>
  );
};

export default Home;