import React from 'react';

const Project6 = () => {
  return (
    <div className="max-w-9/10  bg-wunden ">

      <img src="/Wunden/top.svg" className="w-full pt-20  h-auto " alt="cover design" />


  <div className='flex-col max-w-full py-10 px-10 sm:px-20 xl:px-40 sm:w-full'>
        <h1 className="text-4xl font-black text-primary pb-[20px] uppercase">
          Wunden (er)zählen
        </h1>
        <p className="text-lg text-primary">
               For this project I created a book cover and various personalized illustrations fitting for each chapter. 
 </p>

      

        <h3 className="text-lg py-3 font-bold text-primary">
          2024
        </h3>
        <h3 className="text-lg font-bold  text-primary">Design and Illustration</h3>

      </div>
     



      <img src="/Wunden/cover.png" className=" w-full sm:w-1/2 md:w-2/3 py-10 h-auto mx-auto pr-5  " alt="user flow meetme" />


      <img src="/Wunden/illustrations.png" className="max-w-full py-10 px-5  mx-auto object-cover" alt="MeetMe apps" />




    </div>
  );
};

export default Project6;