import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import Masonry from "react-masonry-css";
import {Link} from "react-router-dom";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
}; // Define responsive breakpoints for Masonry layout

const WorksCard = ({ index, name, sub, short, cover, description, tags, image }) => {
  return (
    <Link to={`/projects/${name}`} className="group">
    <Tilt
      className="xs:w-[300px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full  p-[1px] "
      >
         <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] text-secondary `}>
                [{tag.name}]
              </p>
            ))}
          </div>
        <div className=" rounded-[20px] py-4 px-0 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={cover}
            alt={name}
            className="w-full h-[300px] object-cover "
          />
          <h3 className="text-secondary text-[20px]  py-5 font-bold text-left uppercase">{name}: {sub}</h3>
          <p className="text-secondary text-[16px] text-start">{short}</p>
         
        </div>
      </motion.div>
    </Tilt>
    </Link>
  );
};
const Works =() => {
    return(
        <>
             <motion.div variants={textVariant()}>
               <p className={`${styles.sectionSubText} text-left text-secondary`}>
                 My Work
               </p>
               <h2 className={`${styles.sectionHeadText} text-left text-secondary`}>
                Latest Projects
               </h2>
             </motion.div>
         
            <motion.p variants={fadeIn("up", "spring", 0.1, 1)} 
            className="mt-4 text-secondary text-[17px] max-w-6xl  leading-[30px] text-left">
            Here are some of my projects that showcase my skills in UI/UX design, front-end
            development, and illustration. Each project reflects my passion for creating engaging and user-friendly digital experiences.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10 justify-center">
            {projects.map((project, index) => (
              <WorksCard key={project.name} index={index} {...project} />
            ))}
          </div>
      
        </>
    );

    
}
export default SectionWrapper(Works, "work");