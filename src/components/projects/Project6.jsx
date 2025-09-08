import React from 'react';
const base = import.meta.env.BASE_URL;

const Project6 = () => {
  return (
    <div className="max-w-9/10  bg-[#10110F] ">

      <img src={`${base}Wunden/wunden_top.png`}  className="w-full h-auto " alt="cover design" />


  <div className='flex-col max-w-full py-10 px-10 sm:px-20 xl:px-40 sm:w-full'>
        <h1 className="text-4xl font-black text-primary pb-[20px] uppercase">
          Wunden (er)zählen
        </h1>
        <p className="text-lg text-primary">
For this book, I created the cover and a series of illustrations highlighting key moments from the story. Written by author Pierra Isabella Bernamonti and published by story.one in 2024, the book explores the emotional journey of growing up as an immigrant in Austria. Each illustration is closely tied to the narrative, emphasizing the author’s emotional highs and lows of the author growing up as an immigrant in Austria. </p>

      

        <h3 className="text-lg py-3 font-bold text-primary">
          2024
        </h3>
        <h3 className="text-lg font-bold  text-primary">Design and Illustration</h3>

      </div>
     



      <img src={`${base}Wunden/wunden_book.jpg`}  className=" w-full sm:w-1/2 md:w-2/3 py-10 h-auto mx-auto pr-5  " alt="the book" />


      <img src={`${base}Wunden/illustrations.png`}  className="max-w-full py-10 px-5  mx-auto object-cover" alt="illustrations" />




    </div>
  );
};

export default Project6;