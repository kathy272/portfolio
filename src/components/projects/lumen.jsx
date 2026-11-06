import React, { useState } from 'react';
//Lumen
const base = import.meta.env.BASE_URL;

const Lumen = () => {

  return (
    <section className="max-w-[90vw] mx-auto pt-[50px]">

      <img src={`${base}Lumen/laptop_lumen.webp`} className=" max-w-full mx-auto pb-5 " alt="hotel website landing page on laptop" />
      <div className="py-10">
        <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
          (Concept) Hotel Website: Lumen
        </h2>

        <div className="flex flex-col lg:flex-row gap-10  xl:gap-40">

          <div className="lg:w-2/3">
            <p className="text-lg xl:text-xl pt-5 text-gray-700">
                Lumen is a concept hotel website designed in Figma as a personal UX/UI practice project. The concept combines a clean, contemporary visual style with the atmosphere of a luxury hotel in Salzburg. <br/> I designed the landing page, including a mobile version, a room overview, and an individual room detail page. I first developed the structure through wireframes before creating the final high fidelity designs and interactive prototypes.
      </p>

          </div>
          <div className="lg:w-1/3">


            <h3 className="text-lg xl:text-xl font-bold  text-gray-700 2xl:px-16">Website design, Mobile design</h3>
            <h3 className="text-lg xl:text-xl py-3 text-gray-700 2xl:px-16">
              Figma    </h3>
            <h3 className="text-lg xl:text-xl py-3 font-bold text-gray-700 2xl:px-16">
              2026
            </h3>
          </div>

        </div>

       </div>
  <div className='flex flex-row gap-[6vw] py-[2vw]'>
               <img src={`${base}Lumen/LandingPage.webp`} className="w-[62vw]  pb-10 mx-auto" alt="Landing page" />
        <img src={`${base}Lumen/Lumen_Mobile.webp`} className="w-[22vw]  pb-10 mx-auto" alt="Landing page" />
      </div>
      <div className='flex flex-row gap-[6vw] items-start py-[2vw]'>
        <img src={`${base}Lumen/RoomsOverview.webp`} className="w-[42vw]  pb-10 mx-auto" alt="MeetMe apps" />
        <img src={`${base}Lumen/ProductPage.webp`} className=" w-[42vw] object-contain pb-10 mx-auto" alt="MeetMe apps" />
      </div>

    </section>
  );
};

export default Lumen;