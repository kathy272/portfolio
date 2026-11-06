import React, { useState } from 'react';
//Chronicles
const base = import.meta.env.BASE_URL;

const Chronicles = () => {

  return (
    <section className="max-w-[90vw] mx-auto pt-[50px]">

      <img src={`${base}Chronicles/landingpage_mockup.webp`} className=" max-w-full mx-auto pb-5 " alt="blog website landing page on laptop" />
      <div className="py-10">
        <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
          Blog Website: Calyx's Chronicles
        </h2>

        <div className="flex flex-col lg:flex-row gap-10  xl:gap-40">

          <div className="lg:w-2/3">
            <p className="text-lg xl:text-xl pt-5 text-gray-700">
              Calyx’s Chronicles is a blog website concept I created as a fun side project. It combines a clean design with a content-focused layout. I originally designed and programmed the site in 2023, then redesigned it in Figma in 2025 after losing the initial source code.
            </p>

          </div>
          <div className="lg:w-1/3">


            <h3 className="text-lg xl:text-xl font-bold  text-gray-700 2xl:px-16">Website design and programming</h3>
            <h3 className="text-lg xl:text-xl py-3 text-gray-700 2xl:px-16">
              Figma, HTML, Javascript, C#, SQL        </h3>
            <h3 className="text-lg xl:text-xl py-3 font-bold text-gray-700 2xl:px-16">
              2025
            </h3>
          </div>

        </div>
        <p className="text-lg xl:text-xl text-gray-700  pt-10 ">
          Features of the original website included:
        </p>
        <ul className="text-lg xl:text-xl text-gray-700 list-disc list-inside pb-10 ">
          <li>User accounts with login and registration</li>
          <li>Blog creation with commenting functionality</li>
          <li>Sentiment analysis using VADER to automatically evaluate comment tone and assist with moderation</li>
        </ul>

        <p className="text-lg xl:text-xl text-gray-700  ">
          For this project, I also created wireframes, a lo-fi prototype, user personas, and a SQL database to store users and comments. <br />
          As a fan of stories and mysteries, I wrote the blog entries as short stories featuring Calyx as the main character.
        </p>
      </div>
      <img src={`${base}Chronicles/landingpage_blog.webp`} className=" max-w-full mx-auto pb-5 " alt="blog website landing page on laptop" />

      <div className='flex flex-row gap-[6vw] py-[2vw]'>
        <img src={`${base}Chronicles/overview_blog.webp`} className="w-[42vw]  pb-10 mx-auto" alt="MeetMe apps" />
        <img src={`${base}Chronicles/about_blog.webp`} className="w-[42vw] pb-10 mx-auto" alt="MeetMe apps" />
      </div>
    </section>
  );
};

export default Chronicles;