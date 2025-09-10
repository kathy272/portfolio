import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import ModelCanvas from "./canvas/ModelMain";
const base = import.meta.env.BASE_URL;


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 top-[150px] mx-auto flex-row max-w-7xl items-start gap-5`}>
        <div className="flex flex-col justify-center items-center"></div>

        <div >
          <h1 className={`${styles.heroHeadText} text-secondary `}>

           <span className="text-[#797979]">Hey! </span> I'm Kathy</h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary-100`}>
            I am a passionate Designer and
            <br className='sm:block hidden' />
            Front-End Developer looking<br className='sm:block hidden' />
            to create creative digital experiences. 

          </p>
        </div>
      </div>
      <ModelCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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