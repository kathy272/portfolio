import React from 'react';
const base = import.meta.env.BASE_URL;

const Project4 = () => {
  return (
    <div className="max-w-9/10   bg-[#000000]">

      <img src={`${base}ArcaneMind/top.png`} className="w-full pt-20  h-auto " alt="real time engine title" />




      <div className='flex-col p-8'>
   <div className='flex-col max-w-full py-10 px-10 sm:px-20 xl:px-40 sm:w-full'>
        <h1 className="text-4xl font-black text-primary pb-[20px] uppercase">
          Arcane Mind
        </h1>
        <p className="text-lg text-primary">
        We started with brainstorming
          sessions to determine the key features and functionalities that the app
          should have.
          Once we had a clear idea of what we wanted, we began the
          development phase. My colleague and I utilized our programming skills
          in Kotlin to create the app. We made sure that the app was user-
          friendly and had a simple interface to ensure seamless navigation. <br/>
          The API we used to fetch the cards also played a crucial role in
ensuring that the app delivered accurate results. We also incorporated
the card designs from the Rider-Waite deck into the app.</p>

  

        <h3 className="text-lg py-3 font-bold text-primary">
          2024
        </h3>
        <h3 className="text-lg font-bold  text-primary">Mobile UI/UX and development</h3>
    <h3 className="text-lg py-3  text-primary">
          Kotlin
        </h3>
      </div>




        <img src={`${base}ArcaneMind/divider.svg`} className="max-w-1/4  w-1/2 mx-auto  object-cover" alt="divider" />

        <img src={`${base}ArcaneMind/am_banner.png`} className="max-w-full mx-auto  object-cover" alt="Arcane Mind illustrations" />


        
        <img src={`${base}ArcaneMind/img1.png`} className="max-full max-w-full mx-auto  object-cover" alt="Arcane Mind apps" />

      </div>




    </div>
  );
};

export default Project4;