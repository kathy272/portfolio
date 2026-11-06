import React, { useState } from 'react';
//tideUp
const base = import.meta.env.BASE_URL;

const Portfolio = ({ cardImageRef }) => {

  return (
            <section  className="max-w-[90vw] mx-auto pt-[50px]">
      <img ref={cardImageRef} src={`${base}Portfolio/project7.webp`} className=" w-full mx-auto pb-5"  alt="you are here image" />
      <div className="py-10">
          <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
          Portfolio Website
        </h2>
      
<div className="flex flex-col lg:flex-row gap-10  xl:gap-40">        
  
  <div className="lg:w-2/3">
         <p className="text-lg xl:text-xl pt-5 text-gray-700">
For this project, I challenged myself to learn React and explore how it could work together with my existing 3D and coding skills. Using tutorials and documentation, I built the website with React, Three.js, and Tailwind CSS, creating the 3D elements and interactive components myself. The project is still evolving as I continue to experiment with new ideas and improve the site. It is hosted via GitHub Pages.    
<br/> <br/>P.S. If you noticed the 3D objects at the end of the page, they have a few small interactions built in. You can rotate them or they move around a bit if you hover. I’d like to expand on this in the future and add more small interactions throughout the site.    </p>

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

export default Portfolio;