import React from 'react';
import CountUp from 'react-countup';


const BusinessSummary = () => {
  return (
    <div className='px-5'>
      <div className='container mx-auto bg-primary my-10 py-16 rounded-lg'>
      <div className="grid py-10 px-3 gap-20 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">

        <div className="flex flex-col justify-evenly items-center ">
          <div>
            <div className="text-center text-white text-5xl mb-5"><CountUp duration={1} suffix='+' enableScrollSpy={true} end={50} /></div>
            <div className="text-center text-2xl  text-white">District Points</div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center ">
          <div>
            <div className="text-center text-white text-5xl mb-5"><CountUp duration={2.2} suffix='+' enableScrollSpy={true} end={400} /></div>
            <div className=" text-center text-2xl text-white">Works Employed</div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center ">
          <div>
            <div className="text-center text-white text-5xl mb-5"><CountUp duration={3} suffix='+' enableScrollSpy={true} end={30} /></div>
            <div className=" text-center text-2xl text-white">Sub Businessman</div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center ">
          <div>
            <div className="text-center text-white text-5xl mb-5"><CountUp duration={1} suffix='+' enableScrollSpy={true} end={40} /></div>
            <div className=" text-center text-2xl text-white">Engineers</div>
          </div>
        </div>
        



      </div>
    </div>

      {/* <div>
        <div>
        <div>
          <h1></h1>
          <p></p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        </div>
      </div> */}
    </div>
  );
};

export default BusinessSummary;