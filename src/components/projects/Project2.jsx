import React from 'react';
const base = import.meta.env.BASE_URL;

const Project2 = () => {
  return (
    <section className="max-w-[90vw] mx-auto pt-[50px]">


      <img src={`${base}ARMap/top.png`} className="max-w-full mx-auto pb-5 " alt="ar map header" />

      <div className="py-10">
        <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
          Real-time AR Map rendering
        </h2>
        <div className="flex flex-col lg:flex-row gap-10  xl:gap-40">

          <div className="lg:w-2/3">
            <p className="text-lg xl:text-xl pt-5 text-gray-700">During my internship at the ATLAS Institute, University of Colorado Boulder, I developed an application that explored storytelling in Augmented Reality as part of my bachelor thesis.
              <br />
              <br />
              The application was developed using Unity and C#, with additional tools such as Shader Graphs for visual effects and Python for backend processes. The project aimed to push the boundaries of AR storytelling by leveraging cutting-edge technologies to create a unique and engaging user experience.
            </p>

          </div>
          <div className="lg:w-1/3">

            <h3 className="text-lg xl:text-xl font-bold  text-gray-700">Ar development, API integration, Real-time map creation</h3>
            <h3 className="text-lg xl:text-xl  py-3  text-gray-700">
              Unity, C#, Shader Graphs, Stable Diffusion API, NDI, Websocket, Figma
            </h3>
            <h3 className="text-lg xl:text-xl font-bold text-gray-700">
              2025
            </h3>
          </div>
        </div>
      </div>


      <img src={`${base}ARMap/img4.png`} className="w-full mx-auto lg:py-10 object-cover" alt="ar map graph" />
      <img src={`${base}ARMap/img3.png`} className=" max-w-full mx-auto py-5 object-cover" alt="workflow for shader" />
      <div className="flex flex-col lg:flex-row gap-0  xl:gap-40">
        <div className="lg:w-2/3">
          <p className="text-lg xl:text-xl pt-5 text-gray-700">
            The project focused on creating an interactive storytelling experience through real-time image generation and a Canvas-to-Oculus drawing pipeline. Key features included:          </p>
          <ul className="text-lg xl:text-xl list-disc list-inside text-gray-700 py-3 2xl:px-10">
            <li>Real-time image generation using the Stable Diffusion API to create dynamic content.</li>
            <li>Canvas-to-Oculus drawing pipeline enabling users to create and view drawings in an immersive AR environment.</li>
            <li>Integration of WebSocket for seamless communication between the AR application and the drawing canvas.</li>
          </ul>
          <p className="text-lg xl:text-xl pt-5 text-gray-700">          This internship was part of the Europe–Colorado Program, where I received a stipend and worked for six months in the ACME Lab under Professor Ellen Do. I also had the opportunity to attend lectures and talks, gaining valuable insights into AR, design, and research.
          </p>
          <p className="text-lg italic xl:text-xl text-gray-700  pb-10">
            <br /> The video shown below demonstrates an earlier version of the project, created using screen mirroring and Procreate. Later iterations explored creating a custom drawing application and NDI integration.
          </p>
        </div>
        <div className="w-[400px] pl-10">
          <img src={`${base}ARMap/img2.png`} className=" w-full mx-auto pb-5 object-cover" alt="workflow for video stream" />
        </div>
      </div>




      <video src={`${base}ARMap/concept.mov`} controls className="w-full  h-auto py-10  object-cover" autoPlay
        loop
        muted
        alt="video of the 1.0 version of the AR map"
      />


    </section>
  );
};

export default Project2;