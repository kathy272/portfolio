import React, { useState } from 'react';
//tideUp
const base = import.meta.env.BASE_URL;

const Project1 = ({ cardImageRef }) => {

  return (
            <section  className="max-w-[90vw] mx-auto pt-[50px]">
      <img ref={cardImageRef} src={`${base}Portfolio/project7.png`} className=" w-full mx-auto pb-5"  alt="you are here image" />
      <div className="py-10">
          <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
          Portfolio Website
        </h2>
      
<div className="flex flex-col lg:flex-row gap-0  xl:gap-40">        
  
  <div className="lg:w-2/3">
         <p className="text-lg xl:text-xl pt-5 text-gray-700">
              For this project, I challenged myself by exploring a new framework: React. By following tutorials and studying documentation, I combined my skills in 3D modeling and coding with the Three.js framework and Tailwind CSS to create this website. It’s very much a living project, made with passion and way too much coffee, that will keep growing and evolving, but it’s already a solid first chapter for my portfolio.
        </p>

   </div>
     <div className="lg:w-1/3">
         <h3 className="text-lg xl:text-xl font-bold  text-gray-700">
          Website design and programming</h3>
          <h3 className="text-lg xl:text-xl py-3  text-gray-700">
          Figma, Procreate, React, ThreeJS, HTML, Tailwind CSS, Javascript
        </h3>
  <h3 className="text-lg xl:text-xl font-bold text-gray-700">          Ongoing
        </h3>
      </div>
   </div>
      </div>



    </section>
  );
};

export default Project1;