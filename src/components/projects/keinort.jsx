import React from 'react';
const base = import.meta.env.BASE_URL;

const KeinOrt = () => {
  return (
<section  className="max-w-[90vw] mx-auto pt-[50px]">

        <img src={`${base}KeinOrt/cover.webp`} className="w-full mx-auto " alt="the book" />


      <div className="py-10">
          <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
Kein Ort für Alte Götter
          </h2>
<div className="flex flex-col lg:flex-row gap-10 pt-5  xl:gap-40">        
  
  <div className="lg:w-2/3">
       <p className="text-lg xl:text-xl text-gray-700">
      For a poetry book called "Kein Ort für alte Götter" by Ariel Cassilda Verderber I created the cover art along with 12 small illustrations to go with the poems. I went for a loose, sketchy style that matches the personal and expressive feel of the writing.
      </p>
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
        <img src={`${base}KeinOrt/illustration_1.webp`} className=" w-full mx-auto pb-5 object-cover" alt="illustrations" />
       

        <img src={`${base}KeinOrt/illustration_2.webp`} className=" w-full mx-auto pb-5 object-cover" alt="illustrations" />

        <img src={`${base}KeinOrt/illustration_3.webp`} className=" w-full mx-auto pb-5 object-cover" alt="illustrations" />

    

    </section>
  );
};

export default KeinOrt;