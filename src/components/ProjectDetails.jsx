// this page is used to display a single project
import React, { useState, useEffect } from 'react'; import { motion } from 'framer-motion';
import { styles } from '../styles';

import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import Masonry from "react-masonry-css";
import arrow from '../assets/arrow.svg';
import { Link } from "react-router-dom";

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
};


const ProjectDetails = () => {
    const { name } = useParams();
    const [project, setProject] = useState(null);
    //create overlay of images when clicking on a pic
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const foundProject = projects.find((project) => project.name === name);
        setProject(foundProject);
    }, [name]);

    if (!project) return <div>Loading...</div>;

    return (
        <div className={`  inset-0 top-[120px] mx-auto flex-row  items-start gap-5 `}>
            <div className="flex flex-col justify-center items-center my-12 w-full "></div>



            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full py-10">
                <div>
                    <Link to="/#work"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}>

                        <img src={arrow} alt="arrow back" className="w-12 h-10 object-contain" />

                    </Link>
                    <motion.div variants={{ textVariant: textVariant(0.1) }}>

                        <h2 className="text-secondary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
                            {project.name}
                        </h2>

                    </motion.div>

                    <motion.p
                        variants={{ textVariant: textVariant(0.1) }}
                        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] text-left"
                    >
                        {project.description.map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </motion.p>

                    <div className='mt-4 flex flex-col item-center gap-2'>
                        <div className="flex flex-row gap-2">
                            <h1 className="text-secondary text-[20px] font-bold text-left uppercase">Technologies:</h1>
                            {project.tags.map((tag) => (
                                <h1 key={`${name}-${tag.name}`} className={`text-[20px] text-secondary uppercase `}>
                                    {tag.name} |
                                </h1>
                            ))}
                        </div>
                        <div className="flex flex-row gap-2">
                            <h1 className="text-secondary text-[20px] font-bold text-left uppercase">Year:</h1>
                            <h1 className={`text-[20px] text-secondary uppercase `}>
                                {project.year}
                            </h1>
                        </div>
                        <div className="flex flex-row gap-2">
                            <h1 className="text-secondary text-[20px] font-bold text-left uppercase">Field:</h1>
                            <h1 className={`text-[20px] text-secondary uppercase `}>
                                {project.field}
                            </h1>
                        </div>


                    </div>
                </div>



               <div className="mt-10 md:mt-20 min-w-80px w-1/2">
  {project.image.endsWith('.mov') || project.image.endsWith('.mp4') ? (
    <video
      src={project.image}
      controls
      className="w-full object-cover"
      autoPlay
      loop
      muted
    />
  ) : (
    <img
      src={project.image}
      alt={project.name}
      className="w-full object-cover"
    />
  )}
</div>


            </div>





            <div className="mt-20 flex flex-wrap w-full items-center justify-evenly ">
                {project.images?.map((media, idx) => {
                    const isVideo = media.endsWith('.mov') || media.endsWith('.mp4');
                    return isVideo ? (
                        <video
                            key={idx}
                            src={media}
                            controls
                            className="my-2 flex cursor-pointer w-[350px] h-[400px] object-cover md:max-w-[400px] rounded"
                            onClick={() => setSelectedImage(media)}
                        />
                    ) : (
                        <img
                            key={idx}
                            src={media}
                            alt={`${project.id}-img-${idx}`}
                            className=" my-2  flex cursor-pointer w-[350px] h-[400px] object-cover  md:max-w-[400px] rounded"
                            onClick={() => setSelectedImage(media)}
                        />
                    )
                })}
            </div>
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
//export default ProjectDetails;
export default SectionWrapper(ProjectDetails, "projectdetails");