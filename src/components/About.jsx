import React from "react";
import { motion } from "framer-motion";
import { areas } from "../constants";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";


const AreaCard = ({ index, title }) => {
  return (
    <Tilt   
    className="xs:w-[250px] w-full ">
        <motion.div 
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full   bg-white bg-opacity-20 rounded-md	border-white">
           <div options={{
            max: 45,
            scale: 1,
            speed: 450}} className=" bg-white bg-opacity-10	rounded-md border-white	  min-h-[200px] flex  items-center flex-row backdrop-blur-sm"> 
            <div className="flex flex-col justify-center items-start w-full p-5">
                           <h3 className="text-secondary text-[20px] w-[150px] font-bold text-left ">{title}</h3>

                </div>
                </div>
  <h1 className="absolute bottom-0 right-3 text-secondary text-[64px] font-bold ">
            {index + 1}
          </h1>           
            </motion.div>
    </Tilt>
    );

};
const About =() => {
    return(
        <section id="about" className="pt-[150px]">
        <div className="bg-about w-full object-fit bg-right bg-no-repeat">
            <div className="`${styles.padding} max-w-7xl mx-auto relative z-0`">
        <motion.div variants={{textVariant: textVariant(0.1)}}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Me</h2>
        </motion.div>

        <motion.p variants={fadeIn("up", "spring", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]">
    As a creative computing student with a passion for user-centred design and interactive storytelling, 
    I combine technical development and artistic exploration to craft meaningful digital experiences.
    I’m looking for a role where I can apply these skills to innovative and immersive projects.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10 justify-evenly items-center ">
            {areas.map((area, index) => (
            <AreaCard key={area.title} index={index} {...area} />
        ))}

</div>
        </div></div>

        </section>
    )
    
}
export default About;