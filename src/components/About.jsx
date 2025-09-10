import React from "react";
import { motion } from "framer-motion";
import { areas } from "../constants";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
const base = import.meta.env.BASE_URL;



const AreaCard = ({ index, title }) => {
    return (
        <Tilt
            className="w-[180px] md:w-[250px]  ">
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className="w-full   bg-white bg-opacity-20 rounded-md	border-white">
                <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }} className=" bg-white bg-opacity-10	rounded-md border-white	  min-h-[200px] flex  items-center flex-row backdrop-blur-sm">
                    <div className="flex flex-col justify-center items-start w-full p-5">
                        <h3 className="text-secondary text-[20px] w-[150px] font-bold text-left ">{title}</h3>

                    </div>

                    <h1 className="absolute bottom-0 right-3 text-secondary text-[64px] font-bold ">
                        {index + 1}
                    </h1></div>
            </motion.div>
        </Tilt>
    );

};
const About = () => {
    return (
        <section id="about" className="pt-[170px] bg-about bg-top-[20px] bg-size-[200px] bg-no-repeat">
            <div className=" w-full h-full  object-fit ">
                <div className="`${styles.padding} max-w-7xl mx-auto relative z-0`">
                    <div className="mx-10 xl:mx-0">
                        <motion.div variants={{ textVariant: textVariant(0.1) }}>

                            <p className="sm:text-[18px] text-[14px] text-primary uppercase tracking-wider">Introduction</p>
                            <h2 className="text-primary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About Me</h2>
                        </motion.div>
                        <div>         <img src={`${base}me_drawing.png`} className="absolute w-[200px] md:w-[300px] h-auto mt-[-180px] sm:mt-[-200px] md:mt-[-280px] xl:mt-[-300px] end-5 " alt="drawing of me" />
                        </div>
                        <motion.p variants={fadeIn("up", "spring", 0.1, 1)}
                            className="mt-4  text-justify text-pretty text-primary text-[17px] pr-10 md:pr-20 xl:pr-0 max-w-6xl leading-[30px]">
                            Born and raised in Salzburg, Austria, I’ve always been fascinated by design and technology. After finishing an academic high school program focused on linguistics, I moved to Vienna at 19 to travel the world as a flight attendant.
                        </motion.p>
                        <motion.p variants={fadeIn("up", "spring", 0.1, 1)}
                            className=" text-justify text-pretty text-primary text-[17px] md:pr-20 xl:pr-0 max-w-6xl leading-[30px]">
                            Those adventures gave me a lot of inspiration and helped me build a rich visual library.
                            
                            Eventually, I decided to study Creative Computing in Saint Pölten, where I got to dive deeper into combining design and storytelling with tech. I love blending creativity with technical skills to make immersive experiences, and I’m excited to find a creative space where I can keep exploring and making cool things happen! ;)
                        </motion.p>


                        <h2 className="text-primary font-black py-10 md:text-[40px] sm:text-[30px] xs:text-[20px] text-[20px]">Areas</h2>
                    </div>
                    <div className=" flex flex-wrap gap-5 md:gap-10 justify-evenly items-center ">
                        {areas.map((area, index) => (
                            <AreaCard key={area.title} index={index} {...area} />
                        ))}

                    </div>


                    <motion.div className="pb-10 " variants={{ textVariant: textVariant(0.1) }}>
                        <h2 className="text-secondary mx-10 xl:mx-0 font-black py-10 md:text-[40px] xl:text-secondary  sm:text-[30px] xs:text-[20px] text-[20px]">
                            Technical Skills</h2>
                        <div className="flex flex-col md:flex-row md:flex-wrap px-10 gap-10 justify-between  ">

                            <Tilt
                                className=" w-full md:w-2/5 bg-white bg-opacity-20 rounded-md backdrop-blur-sm border-white">
                                <h2 className="text-secondary p-5 uppercase text-[20px] md:text-[30px] sm:text-[20px]  ">Coding</h2>
                                <p className="text-secondary font-medium px-5 pb-5">Kotlin, Jetpack compose, Unity, <br />
                                    HTML, CSS, JavaScript, C#, React.js, Vue.js, Nuxt.js, Node.js,
                                    SQLite, MySQL, some Python <br />
                                    vvvv-Gamma (realtime engines)
                                </p>
                            </Tilt>
                            <Tilt
                                className="w-full md:w-2/5 bg-white bg-opacity-20 rounded-md	backdrop-blur-sm border-white">
                                <h2 className="text-secondary uppercase p-5 text-[20px] md:text-[30px] sm:text-[20px]  ">UI/UX and Design</h2>
                                <p className="text-secondary font-medium px-5 pb-5">Figma, Canva, some Photoshop, <br />
                                    Blender, Procreate, Aseprite

                                </p>
                            </Tilt>
                            <Tilt
                                className="w-full md:w-2/5 bg-white bg-opacity-20 rounded-md	backdrop-blur-sm border-white">
                                <h2 className="text-secondary uppercase p-5 text-[20px] md:text-[30px] sm:text-[20px]  ">User research</h2>
                                <p className="text-secondary font-medium px-5 pb-5">
                                    Persona Development, Heuristic Evaluation, User Testing, User Interviews, Storyboarding
                                </p>
                            </Tilt>
                        </div>
                    </motion.div>
                </div></div>

        </section>
    )

}

export default About;