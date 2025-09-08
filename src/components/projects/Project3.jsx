import React from 'react';
const base = import.meta.env.BASE_URL;

//real time engine
const Project3 = () => {
  return (
    <div className="max-w-9/10   bg-[#000000]">
      <div className='flex flex-col lg:flex-row w-full '>

        <img src={`${base}rte/top.png`}  className="w-full lg:w-1/2 xl:w-3/4 pl-10 pt-20 h-auto " alt="real time engine title" />


        <video src={`${base}rte/rte.mov`}  controls className="w-full sm:pr-10 h-auto pt-20 lg:w-1/2 object-cover" autoPlay
          loop
          muted
          alt="video of the 360° show"
        />
      </div>
      <div className='flex-col p-8'>





            <div className='flex-col bg-rte1 bg-cover max-w-full py-10 px-10 sm:px-20 xl:px-40 sm:w-full'>
        <h1 className="text-4xl font-black text-primary pb-[20px] uppercase">
          Visual live programming
        </h1>
        <p className="text-lg text-primary">
          Using the vvvv-Gamma program, a visual live programming
            environment based on C#, I had the opportunity to bring my project
            to life on the 69 x 4.5 m display at the House of Digitalization in Tulln, Austria.
<br/>   The live programming environment allowed me to implement my
            ideas in a simple and intuitive way. The program provides a variety of
            tools and features that enabled me to create and animate the visual
            elements of my project. Overall, it was an incredible experience to
            bring my project to life on the display at the House of Digitalization. I
            am grateful for the opportunity to showcase my project on this
            platform. 
  </p>

        <h3 className="text-lg py-3 font-bold text-primary">
          2024
        </h3>
        <h3 className="text-lg font-bold  text-primary">Shader programming</h3>
    <h3 className="text-lg py-3  text-primary">
          C#
        </h3>
   
         
        </div>
        <img src={`${base}rte/img1.png`}  className="max-w-4xl max-w-full mx-auto py-20 object-cover" alt="Real time engine shader graph" />

        <div className='bg-rte2 bg-cover py-10'>
          
        </div>
        <img src={`${base}rte/img2.png`} className="max-w-4xl max-w-full mx-auto py-20 object-cover" alt="Real time engine shader graph" />

      </div>




    </div>
  );
};

export default Project3;