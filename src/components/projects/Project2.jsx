import React from 'react';

const Project2 = () => {
  return (
    <div className="max-w-9/10   bg-primary">
      <img src="/ARMap/top.png" className="max-w-4xl max-w-full mx-auto pb-5 sm:pt-20" alt="ar map header" />
      <div className='flex-col p-8'>


        <div className='flex-col max-w-full py-10 px-10 sm:px-20 xl:px-40 sm:w-full'>
          <h1 className="text-4xl font-black text-gray-700 pb-[20px] uppercase">
            Real-time AR Map rendering
          </h1>
          <p className="text-lg text-gray-700">
            In the ATLAS institute in CU Boulder, I had the opportunity to create an AR Map creation application during an internship.
            <br />
            Created an interactive storytelling experience using real-time image generation and a Canvas-to-Oculus drawing pipeline. This practical component, was part of my bachelor thesis about storytelling in Augmented Reality.
            For this application, I first looked into Python to automate 3D model generation, before diving into real-time creation by using an NDI and a ShaderGraph by using the color data of images to render an asset in ar based on a drawing. Furthermore, by enabling AI generated concept art directly inside the application, using an Stable Diffusion API, enhances the user experience.

            <br />
            Participating in the Europe-Colorado Program, I was presented with a stipend and a 6 month internship in the ACME lab at the University of Colorado, Boulder under Professor Ellen Do. Furthermore, I had the chance to participate in various lectures and talks.

          </p>

          <p className="text-lg text-gray-700">
            My task was to bring the game idea to life by creating concept art, modelling and texturing various assets and create charming dialogue.
          </p>

          <h3 className="text-lg py-3 font-bold text-gray-700">
            2025
          </h3>
          <h3 className="text-lg font-bold  text-gray-700">Ar development, API integration, real-time map creation</h3>

        </div>

        <img src="/ARMap/img4.png" className="max-w-4xl max-w-full mx-auto  object-cover" alt="ar map version 1" />
        <img src="/ARMap/img3.png" className=" max-w-full mx-auto  object-cover" alt="workflow for shader" />
        <img src="/ARMap/img2.png" className=" max-w-full w-3/4 mx-auto  object-cover" alt="workflow for video stream" />
        <img src="/ARMap/img1.png" className="max-w-full w-2/3 md:max-w-1/2 mx-auto  object-contain" alt="ar map version 2.0" />
      </div>
    </div>
  );
};

export default Project2;