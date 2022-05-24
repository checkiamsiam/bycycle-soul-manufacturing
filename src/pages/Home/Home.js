import React from 'react';
import Banner from './Banner/Banner';
import ShortDescribe from './ShortDescribe/ShortDescribe';
import Review from './Review/Review';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import WhyWeBest from './WhyWeBest/WhyWeBest';
import Parts from './Parts/Parts';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <Parts></Parts>
      <WhyWeBest></WhyWeBest>
      <ShortDescribe></ShortDescribe>
      <Review></Review>
    </>
  );
};

export default Home;