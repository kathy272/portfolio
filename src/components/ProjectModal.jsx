import React from "react";
import { motion } from "framer-motion";
import { projectComponents } from "../constants/projectComponents";
import { div } from "framer-motion/client";
import { useState, useEffect, useRef } from "react";



const ProjectModal = ({ project, onClose }) => {
      const [loading, setLoading] = useState(true);
    const ProjectComponent = projectComponents[project.name];
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    
    useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000); 

    return () => clearTimeout(timer);
}, []);

    return (
        
        <div
            className="fixed inset-0 z-50 flex flex-col sm:flex-row items-start justify-center sm:items-center sm:bg-black sm:bg-opacity-80 p-0 sm:p-4" onClick={handleBackgroundClick}
        >
  {loading ? (
      <div className="flex items-center justify-center w-full h-full bg-black text-white text-xl">
        Loading...
      </div>
    ) : (
      <>
      


            <div className="relative w-full   p-5  sm:hidden bg-primary">
                <div className='mt-4 flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] text-secondary `}>
                [{tag.name}]
              </p>
            ))}
          </div>
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full  h-full sm:h-auto sm:w-3/4 bg-white overflow-y-auto max-h-full"           >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-4xl sm:block hidded font-bold text-secondary"
                >
                    &times;
                </button>

                <div className="flex flex-col justify-center w-full  ">
                    <div className="flex-1 ">{ProjectComponent && <ProjectComponent  />}</div>


                </div>
            </motion.div>






            <div className="flex object-cover  items-center sm:block hidden justify-center relative w-[100px] mr-50 pb-9/10 flex-wrap justify-end ">

                {project.tags.map((tag) => (
                    <div
                        key={`${project.name}-${tag.name}`}
                        className="items-center object-cover flex flex-wrap justify-center gap-2  px-3 py-1 text-sm text-gray-700"
                    >

                        {tag.icon && (

                            <img
                                src={tag.icon}
                                alt={tag.name}
                                className="w-12 h-12 object-contain text-white"
                            />
                        )}

                        <span className="text-white w-full uppercase text-center">{tag.name}</span>


                    </div>
                ))}
            </div>
              </>
    )}
        </div>
    );
};

export default ProjectModal;
