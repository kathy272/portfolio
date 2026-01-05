import React from 'react';
const base = import.meta.env.BASE_URL;

const Project4 = () => {
  return (
    <div className="max-w-9/10 bg-[#EAEAEA]">
      <div className='flex-col p-8'>
        <div className='flex-col max-w-5/6 py-5  px-10 xl:px-40 sm:w-full'>
          <img src={`${base}ArcaneMind/cover.png`} className="max-w-5/6 mx-auto pb-10 sm:pt-20" alt="real time engine title" />

          <p className="text-lg xl:text-xl text-gray-700 2xl:px-10">
            The Tarot Card App was developed as a collaborative project, starting with brainstorming sessions to define the app’s core features and functionality. Once the concept was clear, my colleague and I moved into development using Kotlin.
          </p>
          <h3 className="text-lg xl:text-xl py-3 font-bold text-gray-700 2xl:px-10">
            2024
          </h3>
          <h3 className="text-lg xl:text-xl font-bold  text-gray-700 2xl:px-10">Mobile UI/UX and development</h3>
          <h3 className="text-lg xl:text-xl py-3  text-gray-700 2xl:px-10">
           Figma, Kotlin, Procreate
          </h3>

          <img src={`${base}ArcaneMind/img1.png`} className="max-w-5/6 mx-auto 2xl:px-10 py-10 " alt="Arcane Mind page preview" />
          <p className="text-lg xl:text-xl text-gray-700 2xl:px-10">
            We focused on creating a user-friendly interface with simple navigation to ensure a seamless experience. The app integrated an API to fetch cards and deliver accurate results, while also incorporating the Rider–Waite deck designs for authentic visuals.
            This project combined thoughtful planning, collaborative development, and careful design choices to deliver an engaging and accessible mobile experience.
          </p>
          <img src={`${base}ArcaneMind/am_banner.png`} className="max-w-5/6 mx-auto pb-5 " alt="Arcane Mind illustrations" />
        </div>

      </div>




    </div>
  );
};

export default Project4;