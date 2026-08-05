import React from 'react';
const base = import.meta.env.BASE_URL;

//real time engine
const Project3 = () => {
  return (
      <section  className="max-w-[90vw] mx-auto pt-[50px]">

      <div className='flex flex-col lg:flex-row w-full '>

        <img src={`${base}rte/title_rte.png`} className="w-full lg:w-1/2 xl:w-3/4 h-auto " alt="real time engine title" />


        <video src={`${base}rte/rte.mov`} controls className="w-full sm:pr-10 h-auto lg:w-1/2 object-cover" autoPlay
          loop
          muted
          alt="video of the 360° show"
        />
      </div>


      <div className="py-10">
          <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
            
            Visual live programming
          </h2>

          <div className="flex flex-col lg:flex-row gap-10  xl:gap-40">        
  
  <div className="lg:w-2/3">
          <p className="text-lg xl:text-xl pt-5 text-gray-700">
            Using vvvv-Gamma, a visual live programming environment based on C#, I developed and presented an interactive project on the 69 × 4.5 m display at the House of Digitalization in Tulln, Austria.
          </p>
     <p className="text-lg xl:text-xl pt-5 text-gray-700">

            The live programming environment provided an intuitive way to implement, animate, and experiment with visual elements in real time. Leveraging its wide range of tools and features, I was able to transform my ideas into a large-scale, dynamic installation.
          </p>
     <p className="text-lg xl:text-xl pt-5 text-gray-700">
            This project was an incredible opportunity to showcase my work on a prominent digital platform, and to explore how programming and design can merge in a live, interactive setting.
          </p>
</div>
      <div className="lg:w-1/3">

          <h3 className="text-lg xl:text-xl font-bold  text-gray-700">Real-time Shader programming, Creative Coding </h3>
          <h3 className="text-lg xl:text-xl  py-3  text-gray-700">
            C#, vvvv-Gamma
          </h3>
              <h3 className="text-lg xl:text-xl font-bold text-gray-700">
            2024
          </h3>
                  </div>

        </div>
        </div>
        <img src={`${base}rte/img1.png`} className="w-full mx-auto lg:py-10 object-cover" alt="Real time engine shader graph" />

        <div className='bg-rte2 bg-cover py-10'>

        </div>
        <img src={`${base}rte/img2.png`} className="w-full mx-auto lg:py-10 object-cover" alt="Real time engine shader graph" />







    </section>
  );
};

export default Project3;