import React from 'react';
const base = import.meta.env.BASE_URL;

const Album = () => {
  return (
<section  className="max-w-[90vw] mx-auto pt-[50px]">

        <img src={`${base}album/AlbumCover_Mockup.webp`} className="w-full mx-auto " alt="mockup" />


      <div className="py-10">
          <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
Album Cover Design and Illustration
          </h2>
<div className="flex flex-col lg:flex-row gap-10 pt-5  xl:gap-40">        
  
  <div className="lg:w-2/3">
       <p className="text-lg xl:text-xl text-gray-700">
For “Die Bäume Blühen”, I designed the album cover in close collaboration with the musician. The concept was based on the idea of a hand reaching out, covered in insects, which I translated into the final visual direction.        </p>
         </div>
          <div className="lg:w-1/3">

        
        <h3 className="text-lg xl:text-xl font-bold  text-gray-700 ">Cover Art and Illustration</h3>
        <h3 className="text-lg xl:text-xl py-3 text-gray-700 ">
          Procreate        </h3>
          <h3 className="text-lg xl:text-xl font-bold text-gray-700 ">
          2026
        </h3>
        </div>
       
      </div>
      </div>
        <img src={`${base}album/AlbumCover.webp`} className=" w-full mx-auto pb-5 object-cover" alt="full illustration" />
    
    </section>
  );
};

export default Album;