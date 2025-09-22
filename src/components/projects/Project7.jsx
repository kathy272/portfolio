import React, { useState } from 'react';
//tideUp
const base = import.meta.env.BASE_URL;

const Project1 = ({ cardImageRef }) => {

  return (
    <div className="max-w-9/10 bg-[#F9F3EF]">
      <img ref={cardImageRef} src={`${base}Portfolio/cover.png`} className="max-w-4xl max-w-full mx-auto pb-5 sm:pt-20" alt="you are here image" />
      <div className='flex-col max-w-full py-10 px-10 sm:px-20 xl:px-40 sm:w-full'>
        <h1 className="text-4xl font-black text-gray-700 pb-[20px] uppercase 2xl:px-16">
          Portfolio Website
        </h1>
        <p className="text-lg text-gray-700 2xl:px-16">          For this project, I challenged myself by exploring a new framework: React. By following tutorials and studying documentation, I combined my skills in 3D modeling and coding with the Three.js framework and Tailwind CSS to create this website. It’s very much a living project, made with passion and way too much coffee, that will keep growing and evolving, but it’s already a solid first chapter for my portfolio.
        </p>

        <p className="text-lg text-gray-700 2xl:px-16">          My task was to bring the game idea to life by creating concept art, modelling and texturing various assets and create charming dialogue.
        </p>

        <h3 className="text-lg py-3 font-bold text-gray-700 2xl:px-16">
          2025
        </h3>
        <h3 className="text-lg font-bold  text-gray-700 2xl:px-16">  Website design and programming</h3>
        <h3 className="text-lg py-3 text-gray-700 2xl:px-16">
          React, Tailwind CSS, ThreeJS, HTML, Javascript
        </h3>
      </div>




    </div>
  );
};

export default Project1;