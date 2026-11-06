import React, { useState } from 'react';
import { AsyncImage } from 'loadable-image'

const base = import.meta.env.BASE_URL;
//tideUp
const TideUp = ({}) => {
  
  return (
        <section  className="max-w-[90vw] mx-auto pt-[50px]">


        <img src={`${base}TideUp/top.webp`} className=" max-w-full mx-auto pb-5 " alt="tideup header" />
        <div className="py-10">
          <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
          TideUp
        </h2>
      
<div className="flex flex-col lg:flex-row gap-10  xl:gap-40">        
  
  <div className="lg:w-2/3">
         <p className="text-lg xl:text-xl pt-5 text-gray-700">
         TideUp is a cozy 3D game about recycling and upcycling waste to bring positive change to a small island. The player takes on the role of a traveler who washes ashore and decides to help clean up the island, meeting its inhabitants and turning discarded objects into something useful along the way. </p>
          <p className="text-lg xl:text-xl text-gray-700">
My role was to help bring the game world to life through concept art, 3D modelling, and texturing. I also created various environmental assets and contributed to the game's charming character dialogue, helping give the island its own personality.        </p>
</div>
  <div className="lg:w-1/3">
      

        <h3 className="text-lg xl:text-xl font-bold  text-gray-700">GameDesign and asset creation</h3>
          <h3 className="text-lg xl:text-xl py-3  text-gray-700">
            Blender, Unity, C#, Procreate, Jira
          </h3>
          
          <h3 className="text-lg xl:text-xl font-bold text-gray-700">
          2025
        </h3>
          </div>
      </div>
  </div>
      <div>

      <img src={`${base}TideUp/othermodels2.png`}  className="mx-auto w-full py-10 " alt="tideUp Sketches and Building Models" />
      <img src={`${base}TideUp/playerCharacterConcept.png`} className="mx-auto  w-full py-5" alt="tideUp MainCharacter Model Concept" />

      <img src={`${base}TideUp/img11.png`} className="mx-auto  w-full py-5" alt="tideUp MainCharacter Model" />
      <img src={`${base}TideUp/npcs.png`}className=" mx-auto  w-full  py-5" alt="tideUp npc Models" />


      
      <div className='flex flex-row gap-[6vw] py-[2vw]'>
        <img src={`${base}TideUp/img13.png`} className="w-[42vw]  pb-10 mx-auto" alt="MeetMe apps" />
        <img src={`${base}TideUp/img10.png`} className="w-[42vw] pb-10 mx-auto" alt="MeetMe apps" />
      </div>

            <img src={`${base}TideUp/screenshots_2.png`} className=" mx-auto w-full py-5" alt="tideUp Screenshots" />

      <img src={`${base}TideUp/screenshots.png`} className=" mx-auto w-full py-5" alt="tideUp Screenshots" />


</div>
    </section>
  );
};

export default TideUp;