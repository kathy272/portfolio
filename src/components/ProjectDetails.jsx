// this page is used to display a single project
import React, { useState, useEffect } from 'react';import { motion } from 'framer-motion';
import { styles } from '../styles';

import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
}; 


const ProjectDetails = () => {
  const { name} = useParams();
  const [project, setProject] = useState(null);
  //create overlay of images when clicking on a pic
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((project) => project.name === name);
    setProject(foundProject);
  }, [name]);

  if (!project) return <div>Loading...</div>;

  return (
     <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex-row max-w-7xl items-start gap-5`}>
         <div className="flex flex-col justify-center items-center mt-5"></div>

    
     <div></div>
          <motion.div variants={{textVariant: textVariant(0.1)}}>
             <p className={`${styles.sectionSubText}`}>
           <a href="/" className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">Back to Projects</a>
        </p>
              <h2 className={styles.sectionHeadText}>
                {project.name}
              </h2>
               <div className='mt-4 flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] `}>
                {tag.name} | 
              </p>
            ))}
          </div>
          </motion.div>
  
          <motion.p variants={fadeIn("up", "spring", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {project.description}
          </motion.p>
          <motion.p variants={fadeIn("up", "spring", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {project.description2}
          </motion.p>
          <motion.p variants={fadeIn("up", "spring", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {project.description3}
          </motion.p>
          <motion.p variants={fadeIn("up", "spring", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {project.description4}
          </motion.p>
             <Masonry
                          breakpointCols={breakpointColumnsObj}
                          className="my-masonry-grid"
                          columnClassName="my-masonry-grid_column"
                          >
                         {project.images?.map((img, idx) => (

  <img
    key={idx}
    src={img}
    alt={`tideup-img-${idx}`}
    className="w-full rounded-xl my-4"
    onClick={() => setSelectedImage(img)}
  />
))}
</Masonry> 
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                    src={selectedImage}
                    alt="Selected"
                    className="max-w-full max-h-full"
                    onClick={() => setSelectedImage(null)}
                />
                </div>
            )}
            
         

</div>
)

}
export default ProjectDetails;