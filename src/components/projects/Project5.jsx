import React from 'react';
const base = import.meta.env.BASE_URL;

const Project5 = () => {
  return (
    <div className="max-w-9/10   bg-[#A06FE8]">

      <img src={`${base}MeetMe/top.svg`} className="w-full pt-20  h-auto " alt="meetMe app design" />




      <div className=' flex flex-col md:flex-row  py-8'>

<div className="text-md md:text-xl w-full md:w-1/2  p-5 sm:py-20 sm:pl-10 md:pl-20">
   <h1 className="text-4xl font-black text-primary pb-[20px] uppercase">
          MeetMe
        </h1>
         <p className="text-md md:text-xl w-full  text-primary  text-justify">
          MEETME is an event app that allows strangers connect over interests and hobbies.
          The app enables users to create and join groups and text with others to chat and meet up with them!
          <br />
          The task was to design an application connecting people over hobbies in a light-hearted and user-friendly way.

        </p>

         <h3 className="text-lg py-3 font-bold text-primary">
          2023
        </h3>
        <h3 className="text-lg font-bold  text-primary">UI/UX Design</h3>

</div>
       
        <img src={`${base}MeetMe/img3.png`}  className=" w-full sm:w-1/2 md:w-2/3 h-auto mx-auto pr-5 object-contain " alt="user flow meetme" />


      </div>
        <img src={`${base}MeetMe/img1.png`}  className="max-w-full  mx-auto object-cover" alt="MeetMe apps" />




    </div>
  );
};

export default Project5;