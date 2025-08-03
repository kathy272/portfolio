import React, { useState } from 'react';
//tideUp
const Project1 = () => {
  
  return (
  <div className="max-w-9/10   bg-tideUp bg-cover">      
  <img src="/TideUp/top.png" className="max-w-4xl max-w-full mx-auto pb-5 sm:pt-20" alt="tideup header" />
      <div className='flex-col max-w-full py-10 px-10 sm:px-20 xl:px-40 sm:w-full'>
        <h1 className="text-4xl font-black text-gray-700 pb-[20px] uppercase">
          TideUp
        </h1>
        <p className="text-lg text-gray-700">
          TideUp is a cozy 3D game about Re- and Upcycling trash on an island to bring change.
          The player takes on the role of a traveler who gets washed onto the beach and decides to clean up the island to help the environment and the islanders!
        </p>

        <p className="text-lg text-gray-700">
          My task was to bring the game idea to life by creating concept art, modelling and texturing various assets and create charming dialogue.
        </p>

        <h3 className="text-lg py-3 font-bold text-gray-700">
          2025
        </h3>
        <h3 className="text-lg font-bold  text-gray-700">GameDesign and asset creation</h3>

      </div>


      <img src="/TideUp/img11.png" className=" max-w-full mx-auto  object-cover" alt="tideUpMainCharacter" />
      <img src="/TideUp/npcs.png" className="max-w-full mx-auto object-cover py-5" alt="tideUpnpcs" />
      <img src="/TideUp/screenshots.png" className="max-w-full mx-auto py-5" alt="tideUpnpcs" />
      <img src="/TideUp/othermodels1.png" className="max-w-full mx-auto py-5" alt="tideUpnpcs" />
      <img src="/TideUp/othermodels2.png" className="max-w-full mx-auto py-5" alt="tideUpnpcs" />



    </div>
  );
};

export default Project1;