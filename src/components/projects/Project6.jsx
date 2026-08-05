import React from 'react';
const base = import.meta.env.BASE_URL;

const Project6 = () => {
  return (
<section  className="max-w-[90vw] mx-auto pt-[50px]">

        <img src={`${base}Wunden/wunden_top.png`} className="w-full mx-auto " alt="the book" />


      <div className="py-10">
          <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
Wunden (er-)zählen: Book Cover and Illustrations  
          </h2>
<div className="flex flex-col lg:flex-row gap-0  xl:gap-40">        
  
  <div className="lg:w-2/3">
       <p className="text-lg xl:text-xl pt-5 text-gray-700">
          For this project, I created the cover design and a series of illustrations highlighting key moments from the story. Written by author Pierra Isabella Bernamonti and published by story.one in 2024, the book explores the emotional journey of growing up as an immigrant in Austria.
         <br/>  <br/> Each illustration was carefully tied to the narrative, emphasizing the author’s emotional highs and lows. I collaborated closely with the author to ensure that the cover and chapter-based illustrations reflected the tone and themes of the book.
        </p>
         </div>
          <div className="lg:w-1/3">

        
        <h3 className="text-lg xl:text-xl font-bold  text-gray-700 ">Cover Art and Illustration</h3>
        <h3 className="text-lg xl:text-xl py-3 text-gray-700 ">
          Procreate        </h3>
          <h3 className="text-lg xl:text-xl font-bold text-gray-700 ">
          2024
        </h3>
        </div>
       
      </div>
      </div>
        <img src={`${base}Wunden/illustrations.png`} className=" w-full mx-auto pb-5 object-cover" alt="illustrations" />
       
        <img src={`${base}Wunden/cover.png`} className=" w-full mx-auto pb-5 object-cover" alt="cover design" />
        <p className="text-lg italic xl:text-xl text-gray-700 2xl:px-10 pb-10">
          All book images were provided by the author.
        </p>

    

    </section>
  );
};

export default Project6;