import React from 'react';
const base = import.meta.env.BASE_URL;

const Project5 = () => {
  return (
    <section className="max-w-[90vw] mx-auto pt-[50px]">

      <img src={`${base}MeetMe/threeMeetMe.png`} className="w-full h-auto " alt="meetMe app design" />


      <div className="py-10">
        <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
          MeetMe App Design
        </h2>
        <div className="flex flex-col lg:flex-row gap-10  xl:gap-40">

          <div className="lg:w-2/3">
            <p className="text-lg xl:text-xl pt-5 text-gray-700">
              MeetMe is a social app prototype I created in Figma that helps people connect through shared interests and hobbies. The app enables users to create and join groups, chat with others, and organize meetups.
            </p>
            <p className="text-lg xl:text-xl  pt-5 text-gray-700">
              Features include:</p>
            <ul className="list-disc text-lg xl:text-xl  text-gray-700  list-inside py-3 ">
              <li>User flow for onboarding and navigation</li>
              <li>High-fidelity prototype for testing user interactions</li>
              <li>Event management (create, join, and save events)</li>
              <li>Interest groups where users can connect around shared hobbies</li>
              <li>Chat functionality to enable easy communication between participants</li>
            </ul>
            <p className="text-lg xl:text-xl text-gray-700">
              This project focused on designing a smooth user journey and intuitive interface to encourage meaningful social interactions.
            </p>
          </div>
          <div className="lg:w-1/3">


            <h3 className="text-lg xl:text-xl font-bold  text-gray-700">UI/UX Design</h3>
            <h3 className="text-lg xl:text-xl  py-3  text-gray-700">
              Figma
            </h3>
            <h3 className="text-lg xl:text-xl font-bold text-gray-700">
              2023
            </h3>
          </div>
        </div>

      </div>
   <div className='flex flex-row gap-[6vw]'>
        <img src={`${base}MeetMe/UserFlow_MeetMe.png`} className="w-[42vw]  pb-10 mx-auto" alt="MeetMe apps" />
        <img src={`${base}MeetMe/UserPersona_MeetMe.png`} className="w-[42vw] pb-10 mx-auto" alt="MeetMe apps" />
      </div>
      <div className='flex flex-row gap-[6vw] py-[4vw]'>
        <img src={`${base}MeetMe/CaseStudyWireframes_MeetMe.png`} className="w-[42vw]  pb-10 mx-auto" alt="MeetMe apps" />
        <img src={`${base}MeetMe/singleMeetMe.png`} className="w-[42vw] pb-10 mx-auto" alt="MeetMe apps" />
      </div>



      <img src={`${base}MeetMe/overviewMeetMe.png`} className="w-full pb-10 mx-auto" alt="MeetMe apps" />


    </section>
  );
};

export default Project5;