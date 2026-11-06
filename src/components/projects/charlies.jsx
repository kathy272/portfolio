import React from 'react';
const base = import.meta.env.BASE_URL;

const Charlies = () => {
    return (
        <section className="max-w-[90vw] mx-auto pt-[50px]">

            <img src={`${base}Charlies/charlies_illustration_2.webp`} className="w-full mx-auto " alt="the book" />


            <div className="py-10">
                <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">
                    Charlies Island: 2D Game Illustrations
                </h2>
                <div className="flex flex-col lg:flex-row gap-10 pt-5  xl:gap-40">

                    <div className="lg:w-2/3">
                        <p className="text-lg xl:text-xl text-gray-700">
As part of a group project, I was responsible for creating various 2D and later 3D low poly assets for a game, including NPC portraits, loading screens, and environmental elements. The visual style combines low poly 3D models with 2D illustration and painterly textures. The game was developed from initial concept to a fully playable prototype within two weeks.                        </p>
                    </div>
                    <div className="lg:w-1/3">


                        <h3 className="text-lg xl:text-xl font-bold  text-gray-700 ">Game Art and Illustration</h3>
                        <h3 className="text-lg xl:text-xl py-3 text-gray-700 ">
                            Procreate</h3>
                        <h3 className="text-lg xl:text-xl font-bold text-gray-700 ">
                            2024
                        </h3>
                    </div>

                </div>
            </div>
            <img src={`${base}Charlies/charlies_characters.webp`} className=" w-full mx-auto object-cover" alt="illustrations" />
            <div className='flex flex-col sm:flex-row gap-[6vw] pt-[10vw]'>
                <img src={`${base}Charlies/charlies_concept_1.webp`} className="sm:w-[43vw]  pb-10 mx-auto" alt="concept of lighthouse" />
                <img src={`${base}Charlies/charlies_concept_2.webp`} className="sm:w-[43vw]  pb-10 mx-auto" alt="concept of desert home" />
            </div>
            
 <div className='flex flex-col sm:flex-row gap-[6vw] pt-[10vw]'>
                <img src={`${base}Charlies/charlies_3D_1.webp`} className="sm:w-[43vw]  pb-10 mx-auto" alt="concept of lighthouse" />
                <img src={`${base}Charlies/charlies_3D_2.webp`} className="sm:w-[43vw]  pb-10 mx-auto" alt="concept of desert home" />
            </div>

            <div className='flex flex-col sm:flex-row gap-[6vw] pt-[10vw]'>
                <img src={`${base}Charlies/charlies_stamp_1.gif`} className="sm:w-[22vw] object-contain pb-10 mx-auto" alt="green stamp gif" />
                <img src={`${base}Charlies/charlies_stamp_2.gif`} className="sm:w-[22vw] object-contain pb-10 mx-auto" alt="red stamp gif" />
                <div className='sm:w-[22vw] h-auto pb-10 mx-auto'>               
                     <img src={`${base}Charlies/charlies_stamp_3.gif`} className="sm:w-[15vw] object-contain pb-10 mx-auto" alt="blue stamp gif" />
</div>
            </div>




        </section>
    );
};

export default Charlies;