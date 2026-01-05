import React from 'react';
const base = import.meta.env.BASE_URL;

//real time engine
const Project3 = () => {
  return (
    <div className="max-w-9/10   bg-[#000000]">
      <div className='flex flex-col lg:flex-row w-full '>

        <img src={`${base}rte/top.png`} className="w-full lg:w-1/2 xl:w-3/4 pl-10 pt-20 h-auto " alt="real time engine title" />


        <video src={`${base}rte/rte.mov`} controls className="w-full sm:pr-10 h-auto pt-20 lg:w-1/2 object-cover" autoPlay
          loop
          muted
          alt="video of the 360° show"
        />
      </div>
      <div className='flex-col max-w-5/6 py-10  px-10 xl:px-40 sm:w-full'>


        <div className='flex-col bg-rte1 bg-cover max-w-full py-10 px-10  sm:w-full'>
          <h1 className="text-4xl font-black text-primary pb-[20px] uppercase">
            Visual live programming
          </h1>
          <p className="text-lg xl:text-xl text-primary">
            Using vvvv-Gamma, a visual live programming environment based on C#, I developed and presented an interactive project on the 69 × 4.5 m display at the House of Digitalization in Tulln, Austria.
          </p>
          <p className="text-lg xl:text-xl text-primary pt-3">

            The live programming environment provided an intuitive way to implement, animate, and experiment with visual elements in real time. Leveraging its wide range of tools and features, I was able to transform my ideas into a large-scale, dynamic installation.
          </p>
          <p className="text-lg xl:text-xl text-primary pt-3">
            This project was an incredible opportunity to showcase my work on a prominent digital platform, and to explore how programming and design can merge in a live, interactive setting.
          </p>

          <h3 className="text-lg xl:text-xl py-3 font-bold text-primary">
            2024
          </h3>
          <h3 className="text-lg xl:text-xl font-bold  text-primary">Shader programming</h3>
          <h3 className="text-lg xl:text-xl pt-3  text-primary">
            C#, vvvv-Gamma
          </h3>
        </div>
        <img src={`${base}rte/img1.png`} className="max-w-5/6 mx-auto pb-5 pt-10 " alt="Real time engine shader graph" />

        <div className='bg-rte2 bg-cover py-10'>

        </div>
        <img src={`${base}rte/img2.png`} className="max-w-5/6 mx-auto pb-5 pt-10 " alt="Real time engine shader graph" />

      </div>




    </div>
  );
};

export default Project3;