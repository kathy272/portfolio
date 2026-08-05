import React, { useState } from 'react';
import { AsyncImage } from 'loadable-image'

const base = import.meta.env.BASE_URL;
//tideUp
const Project1 = ({}) => {
  
  return (
        <section  className="max-w-[90vw] mx-auto pt-[50px]">


        <img src={`${base}TideUp/top.png`} className=" max-w-full mx-auto pb-5 " alt="tideup header" />
        <div className="py-10">
          <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
          TideUp
        </h2>
      
<div className="flex flex-col lg:flex-row gap-0  xl:gap-40">        
  
  <div className="lg:w-2/3">
         <p className="text-lg xl:text-xl pt-5 text-gray-700">
          TideUp is a cozy 3D game about Re- and Upcycling trash on an island to bring change.
          The player takes on the role of a traveler who gets washed onto the beach and decides to clean up the island to help the environment and the islanders!
        </p>
          <p className="text-lg xl:text-xl text-gray-700">
          My task was to bring the game idea to life by creating concept art, modelling and texturing various assets and create charming dialogue.
        </p>
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

      <img src={`${base}TideUp/img11.png`} className="mx-auto  w-full py-5" alt="tideUp MainCharacter Model" />
      <img src={`${base}TideUp/npcs.png`}className=" mx-auto  w-full  py-5" alt="tideUp npc Models" />
      <img src={`${base}TideUp/screenshots.png`} className=" mx-auto w-full py-5" alt="tideUp Screenshots" />


</div>
    </section>
  );
};

export default Project1;