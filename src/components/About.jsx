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
        <section id="about" className="pt-[150px]">
            <div className="bg-about w-full object-fit bg-right bg-no-repeat">
                <div className="`${styles.padding} max-w-7xl mx-auto relative z-0`">
                    <motion.div variants={{ textVariant: textVariant(0.1) }}>
                        <p className={styles.sectionSubText}>Introduction</p>
                        <h2 className={styles.sectionHeadText}>About Me</h2>
                    </motion.div>

                    <motion.p variants={fadeIn("up", "spring", 0.1, 1)}
                        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]">
                        Born and raised in Salzburg, Austria, I’ve always been fascinated by design and technology. After finishing an academic high school program focused on linguistics, I moved to Vienna at 19 to travel the world as a flight attendant. Those adventures gave me a lot of inspiration and helped me build a rich visual library.
<br/>
                        Eventually, I decided to study Creative Computing in Saint Pölten, where I got to dive deeper into combining design and storytelling with tech. I love blending creativity with technical skills to make immersive experiences, and I’m excited to find a creative space where I can keep exploring and making cool things happen! ;)
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