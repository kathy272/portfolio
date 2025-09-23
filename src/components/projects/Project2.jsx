import React from 'react';
const base = import.meta.env.BASE_URL;

const Project2 = () => {
  return (
    <div className="max-w-9/10   bg-primary">
      <div className='flex-col p-8'>


        <div className='flex-col max-w-5/6 py-5  px-10 xl:px-40 sm:w-full'>
          <img src={`${base}ARMap/top.png`} className="max-w-5/6 mx-auto pb-10 sm:pt-20" alt="ar map header" />

          <h1 className="text-4xl font-black text-gray-700 pb-[20px] uppercase">
            Real-time AR Map rendering
          </h1>
          <p className="text-lg xl:text-xl text-gray-700">
            AR Map Creation Application — During my internship at the ATLAS Institute, University of Colorado Boulder, I developed an application that explored storytelling in Augmented Reality as part of my bachelor thesis.

          </p>

          <p className="text-lg xl:text-xl text-gray-700">
            My task was to bring the game idea to life by creating concept art, modelling and texturing various assets and create charming dialogue.
          </p>

          <h3 className="text-lg xl:text-xl py-3 font-bold text-gray-700">
            2025
          </h3>
          <h3 className="text-lg xl:text-xl font-bold  text-gray-700">Ar development, API integration, real-time map creation</h3>
          <h3 className="text-lg xl:text-xl py-3  text-gray-700">
            Unity, C#, Stable Diffusion API, Shader Graphs, Python, Figma, Websocket
          </h3>
        

        <img src={`${base}ARMap/img4.png`} className="max-w-4xl max-w-full mx-auto pb-10 object-cover" alt="ar map version 1" />
        <p className="text-lg xl:text-xl text-gray-700 2xl:px-10">
          The project focused on creating an interactive storytelling experience through real-time image generation and a Canvas-to-Oculus drawing pipeline. Key features included:          </p>
        <ul className="text-lg xl:text-xl list-disc list-inside text-gray-700 py-3 2xl:px-10">
          <li>Real-time image generation using the Stable Diffusion API to create dynamic content.</li>
          <li>Canvas-to-Oculus drawing pipeline enabling users to create and view drawings in an immersive AR environment.</li>
          <li>Integration of WebSocket for seamless communication between the AR application and the drawing canvas.</li>
        </ul>
        <p className="text-lg xl:text-xl text-gray-700 2xl:px-10">
          The application was developed using Unity and C#, with additional tools such as Shader Graphs for visual effects and Python for backend processes. The project aimed to push the boundaries of AR storytelling by leveraging cutting-edge technologies to create a unique and engaging user experience.
        </p>

        <img src={`${base}ARMap/img3.png`} className=" max-w-full mx-auto py-5 object-cover" alt="workflow for shader" />
        <p className="text-lg xl:text-xl text-gray-700 2xl:px-10">
          This internship was part of the Europe–Colorado Program, where I received a stipend and worked for six months in the ACME Lab under Professor Ellen Do. I also had the opportunity to attend lectures and talks, gaining valuable insights into AR, design, and research.
        </p>
                <img src={`${base}ARMap/img2.png`} className=" max-w-full w-1/2 mx-auto pb-5 object-cover" alt="workflow for video stream" />

        
        <video src={`${base}ARMap/concept.mov`}  controls className="w-full  h-auto py-10  object-cover" autoPlay
          loop
          muted
          alt="video of the 1.0 version of the AR map"
        />
        <p className="text-lg italic xl:text-xl text-gray-700 2xl:px-10 pb-10">
          The video shown here demonstrates an earlier version of the project, created using screen mirroring and Procreate. Later iterations explored creating a custom drawing application and NDI integration.
        </p>
      </div>
    </div></div>
  );
};

export default Project2;