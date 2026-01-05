import React from "react";
import { motion } from 'framer-motion';

import { bgStyle, styles } from '../styles';
import ModelCanvas from "./canvas/ModelMain";
const base = import.meta.env.BASE_URL;


const Hero = () => {
  return (
<section className="relative w-full min-h-screen pt-[70px]">

<div className="relative sm:mx-10 md:mx-20 mt-[50px] overflow-hidden">
      <div className="bg-primary w-full absolute z-10" style={{
      height: "clamp(4.5rem, 13vw, 11.5rem)",
    }}></div>

  <img src={`${base}yellowstone.jpg`} alt="Background" className="
  w-full h-full object-cover z-10" />
  <h1 className=" absolute font-black z-10 w-full 
  top-[10px]
  text-center
  text-[60px]
  sm:top-[33px]
    md:top-[20px]

  lg:top-[23px]
  xl:top-[10px]
      leading-none
      tracking-tight
      text-transparent
      bg-clip-text
      bg-no-repeat
      select-none
         [background-position:var(--bg-pos)]
    sm:[background-position:50%_-33px]
    md:[background-position:50%_-20px]
        lg:[background-position:50%_-23px]

  xl:[background-position:50%_-10px]"
      style={{fontSize: "clamp(4.5rem, 13vw, 14rem)", backgroundImage: `url(${base}yellowstone.jpg)`,
      backgroundSize: "cover",
       }}>PORTFOLIO.</h1>
</div>


<div
  className="
    relative
    flex
    flex-col
    sm:flex-row
    items-start
    justify-between
    gap-6
    px-6
    md:px-[100px]
    lg:px-20
    xl:px-[150px]
    text-secondary
    sm:text-primary
    bottom-[-50px]
    sm:bottom-[200px]
    sm:px-[50px]
    2xl:bottom-[800px]
    "
>

  {/* LEFT */}
  <h1
    className="
      font-black
      leading-none
      sm:text-primary
      sm:max-w-[60%]
    "
    style={{
      fontSize: "clamp(2rem, 6vw, 9rem)",
    }}
  >
    <span className="sm:text-primary">Hey! </span> <br className='xl:block hidden' />I'm Kathy
  </h1>

  {/* RIGHT */}
  <p
    className="
      sm:text-right
      font-bold
      text-primary-100
      sm:max-w-[40%]
    "
    style={{
      fontSize: "clamp(1rem, 2.5vw, 2rem)",
    }}
  >
    I am a passionate Designer and Front-End Developer looking
    <br />
    to create creative digital experiences.
  </p>

</div>
      

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