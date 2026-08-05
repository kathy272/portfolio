import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import ModelCanvas from "./canvas/ModelMain";
import logo from '../assets/logo_new.svg';

const base = import.meta.env.BASE_URL;


const Hero = () => {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-screen mt-[50px]">

      <div className="w-3/4 h-auto place-content-center relative mx-auto">

        <h1 className="relative top-20 left-22 w-full h-auto flex items-center text-secondary
   text-6xl sm:text-8xl md:text-9xl xl:text-[180px] font-bold">
          PORTFOLIO</h1>



        <div className="relative top-[100px] sm:top-[350px] max-w-7xl mx-auto flex flex-column ">
          <img src={logo} alt="logo" className="absolute bottom-[20px] sm:bottom-0 right-[-20px] sm:right-0 w-[80px] sm:w-[150px] md:w-[175px] lg:w-[200px] xl:w-[250px] object-contain rotate-12 z-10 drop-shadow-md" />

          <h1 className="relative w-1/2 left-[150px]  md:left-[175px] lg:left-[250px] xl:left-[320px] 2xl:left-[400px] justify-end flex text-secondary
   text-4xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-light mx-4 my-2 min-w-[140px] right-0">
            KENDLBACHER</h1>

          <h1 className="relative top-7 sm:top-[50px] md:top-[60px] xl:top-[80px] 2xl:top-[100px]  w-1/2 h-full flex items-center justify-end text-secondary
      text-4xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl  font-light 
      right-0 mx-4 my-2 min-w-[140px]
      ">

            KATHARINA</h1>
        </div>
      </div>



      <div className="absolute xs:bottom-10 bottom-32 w-full hidden sm:flex justify-center items-center">
        <a href="#about">
          <div className="w-[37px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              className="w-2 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>

      </div>
    </section>
  )
}
export default Hero;