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

const WorksCard = ({ index, name, description, tags, image }) => {
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
        className="w-full  p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={image}
            alt={name}
            className="w-full h-[200px] object-cover rounded-[20px]"
          />
          <h3 className="text-white text-[20px] py-5 font-bold text-center">{name}</h3>
          <p className="text-secondary text-[16px] text-start">{description}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] `}>
                #{tag.name}
              </p>
            ))}
          </div>
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
               <p className={`${styles.sectionSubText} text-center`}>
                 My Work
               </p>
               <h2 className={`${styles.sectionHeadText} text-center`}>
                Projects
               </h2>
             </motion.div>
             
             <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                {projects.map((project, index) => (
                  <WorksCard key={`project-${index}`} index={index} {...project} />
                ))}
                </Masonry> 
      
        </>
    );

    
}
export default SectionWrapper(Works, "works");