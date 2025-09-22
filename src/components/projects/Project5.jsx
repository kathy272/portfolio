import React from 'react';
const base = import.meta.env.BASE_URL;

const Project5 = () => {
  return (
    <div className="max-w-9/10 bg-[#F9F3EF]">
      <div className='flex-col max-w-5/6 py-10  px-10 xl:px-40 sm:w-full'>

        <img src={`${base}MeetMe/top.png`} className="w-full pb-10  h-auto " alt="meetMe app design" />

        <p className="text-lg text-gray-700 2xl:px-16">
          MeetMe is a social app prototype I created in Figma that helps people connect through shared interests and hobbies. The app enables users to create and join groups, chat with others, and organize meetups.
        </p>

        <h3 className="text-lg py-3 font-bold text-gray-700 2xl:px-16">
          2023
        </h3>
        <h3 className="text-lg font-bold text-gray-700 2xl:px-16">UI/UX Design</h3>

        <img src={`${base}MeetMe/img2.png`} className="max-w-full  mx-auto object-cover" alt="MeetMe apps" />
        <p className="text-lg text-gray-700 2xl:px-16">
          Features include:
          <ul className="list-disc list-inside py-3 2xl:px-16">
            <li>User flow for onboarding and navigation</li>
            <li>High-fidelity prototype for testing user interactions</li>
            <li>Event management (create, join, and save events)</li>
            <li>Interest groups where users can connect around shared hobbies</li>
            <li>Chat functionality to enable easy communication between participants</li>
          </ul>

        </p>
         <p className="text-lg text-gray-700 pb-10 2xl:px-16">
          This project focused on designing a smooth user journey and intuitive interface to encourage meaningful social interactions.
        </p>
        <img src={`${base}MeetMe/img1.png`} className="max-w-full  mx-auto object-cover" alt="MeetMe apps" />

      </div>




    </div>
  );
};

export default Project5;