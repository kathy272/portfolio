import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#363636", color: "black" }}
      contentArrowStyle={{ borderRight: "7px solid  black" }}
      date={experience.date}
     >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
// Component to display work experience in a vertical timeline 
const Experience = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24 max-w-[90vw] mx-auto">
       <motion.div variants={textVariant()} className=" ">
             <h2 className=" text-secondary font-light uppercase md:text-[70px] sm:text-[60px] xs:text-[50px] leading-tight text-[30px]">Experience:</h2>
           </motion.div>

      <div className='flex flex-col '>
        <VerticalTimeline
          className="mt-10"
          lineColor="#363636"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};


export default Experience;