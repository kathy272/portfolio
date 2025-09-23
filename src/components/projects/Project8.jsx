import React, { useState } from 'react';
//Chronicles
const base = import.meta.env.BASE_URL;

const Project1 = () => {

  return (
    <div className="max-w-9/10 bg-[#F9F3EF]">
      <div className='flex-col max-w-5/6 py-10  px-10 xl:px-40 sm:w-full'>
      <img src={`${base}Chronicles/cover.png`} className="max-w-5/6 mx-auto pb-5 sm:pt-20" alt="blog website landing page on laptop" />

        <p className="text-lg xl:text-xl text-gray-700 2xl:px-16">
          Calyx’s Chronicles is a blog website concept I created as a fun side project. It combines a clean design with a content-focused layout. I originally designed and programmed the site in 2023, then redesigned it in Figma in 2025 after losing the initial source code.
        </p>
        <h3 className="text-lg xl:text-xl py-3 font-bold text-gray-700 2xl:px-16">
          2025
        </h3>
        <h3 className="text-lg xl:text-xl font-bold  text-gray-700 2xl:px-16">Website design and programming</h3>
        <h3 className="text-lg xl:text-xl py-3 text-gray-700 2xl:px-16">
          HTML, Javascript, C#, Figma, sql-database
        </h3>
        <img src={`${base}Chronicles/img1.png`} className="max-w-5/6 mx-auto pb-5 " alt="blog entries page" />
        <p className="text-lg xl:text-xl text-gray-700 2xl:px-16">
          Features of the original website included:

          <ul className="list-disc list-inside py-3 2xl:px-16">
            <li>User accounts with login and registration</li>
            <li>Blog creation with commenting functionality</li>
            <li>Sentiment analysis using VADER to automatically evaluate comment tone and assist with moderation</li>

          </ul>
        </p>

        <p className="text-lg xl:text-xl text-gray-700 2xl:px-16">

          For this project, I also created wireframes, a lo-fi prototype, user personas, and a SQL database to store users and comments. <br />
          As a fan of stories and mysteries, I wrote the blog entries as short stories featuring Calyx as the main character. The visuals were created using MidJourney and Unsplash.
        </p>
        <img src={`${base}Chronicles/img2.png`} className="max-w-5/6 mx-auto pb-5 pt-10 " alt="blog about page" />
      </div>



    </div>
  );
};

export default Project1;