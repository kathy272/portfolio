import React from 'react';
const base = import.meta.env.BASE_URL;

const Project4 = () => {
  return (
    <section className="max-w-[90vw] mx-auto pt-[50px]">

      <img src={`${base}ArcaneMind/cover_arcaneMind.png`} className="w-full mx-auto pb-5" alt="real time engine title" />

      <div className="py-10">
        <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
          Real-time AR Map rendering
        </h2>
   <div className="flex flex-col lg:flex-row gap-10  xl:gap-40">   
          <div className="lg:w-2/3">
            <p className="text-lg xl:text-xl pt-5 text-gray-700">
              The Tarot Card App was developed as a collaborative project, starting with brainstorming sessions to define the app’s core features and functionality. Once the concept was clear, my colleague and I moved into development using Kotlin.
              <br /> <br /> We focused on creating a user-friendly interface with simple navigation to ensure a seamless experience. The app integrated an API to fetch cards and deliver accurate results, while also incorporating the Rider–Waite deck designs for authentic visuals.
              This project combined thoughtful planning, collaborative development, and careful design choices to deliver an engaging and accessible mobile experience.
            </p>

          </div>
          <div className="lg:w-1/3">
            <h3 className="text-lg xl:text-xl font-bold  text-gray-700 2xl:px-10">
              UI/UX and Mobile Development</h3>
            <h3 className="text-lg xl:text-xl  py-3  text-gray-700 2xl:px-10">
              Figma, Kotlin, Procreate</h3>
            <h3 className="text-lg xl:text-xl font-bold text-gray-700 2xl:px-10">
              2024</h3>
          </div>
        </div>
      </div>
        <div className='flex flex-row gap-[6vw] py-[4vw]'>
         <img src={`${base}ArcaneMind/Single_arcaneMind.png`}  className="w-[42vw]  pb-10 mx-auto" alt="MeetMe apps" />
         <img src={`${base}ArcaneMind/overview_arcaneMind.png`}   className="w-[42vw] pb-10 mx-auto" alt="MeetMe apps" />
      </div>
      <img src={`${base}ArcaneMind/am_banner.png`} className="w-full relative top-[-100px] lg:top-[-180px] mx-auto " alt="Arcane Mind illustrations" />

    </section>
  );
};

export default Project4;