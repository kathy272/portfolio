import React from 'react';
const base = import.meta.env.BASE_URL;

const Project6 = () => {
  return (
    <div className="max-w-9/10   ">

      <div className='flex-col max-w-5/6 py-10  px-10 xl:px-40 sm:w-full'>

        <img src={`${base}Wunden/wunden_book.jpg`} className="max-w-5/6 mx-auto pb-5 sm:pt-20" alt="the book" />


        <p className="text-lg xl:text-xl text-gray-700 2xl:px-16">
          For this project, I created the cover design and a series of illustrations highlighting key moments from the story. Written by author Pierra Isabella Bernamonti and published by story.one in 2024, the book explores the emotional journey of growing up as an immigrant in Austria.
        </p>
        <h3 className="text-lg xl:text-xl py-3 font-bold text-gray-700 2xl:px-16">
          2024
        </h3>
        <h3 className="text-lg xl:text-xl font-bold  text-gray-700 2xl:px-16">Cover Art and Illustration</h3>
        <h3 className="text-lg xl:text-xl py-3 text-gray-700 2xl:px-16">
          Procreate        </h3>
        <img src={`${base}Wunden/illustrations.png`} className="max-w-full py-10 px-5  mx-auto object-cover" alt="illustrations" />
        <p className="text-lg xl:text-xl text-gray-700 2xl:px-16">
          Each illustration was carefully tied to the narrative, emphasizing the author’s emotional highs and lows. I collaborated closely with the author to ensure that the cover and chapter-based illustrations reflected the tone and themes of the book. <br />
          Read more on&nbsp;
          <a href="https://www.story.one/de/book/wunden-erzahlen/" className="underline">story.one</a>.
        </p>
        <img src={`${base}Wunden/cover.png`} className="max-w-5/6 mx-auto pb-5 pt-10" alt="cover design" />
        <p className="text-lg italic xl:text-xl text-gray-700 2xl:px-10 pb-10">
          All book images were provided by the author.
        </p>

      </div>

    </div>
  );
};

export default Project6;