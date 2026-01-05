import React from "react";
import { motion } from "framer-motion";
import { projectComponents } from "../constants/projectComponents";

const ProjectModal = ({ project, onClose }) => {
    const ProjectComponent = projectComponents[project.name];
    
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    
    return (
        <div
            className="fixed inset-0 z-50 flex sm:flex-row items-start justify-center sm:items-center sm:bg-black sm:bg-opacity-80 p-0 sm:p-4" onClick={handleBackgroundClick}
        >
            <>
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
                        <div className="flex-1 ">{ProjectComponent && <ProjectComponent />}</div>


                    </div>
                </motion.div>






                
            </>

        </div>
    );
};

export default ProjectModal;
