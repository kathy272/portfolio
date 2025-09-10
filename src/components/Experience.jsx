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
      contentStyle={{ background: "#363636", color: "white" }}
      contentArrowStyle={{ borderRight: "7px solid  white" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
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
// Component to display work experience in a vertical timeline format
const Experience = () => {
  return (
    <section className="bg-secondary">
      <motion.div className={`${styles.padding} max-w-7xl mx-auto relative`}
        variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left text-white`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-left text-white`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='flex flex-col '>
        <VerticalTimeline
          className="mt-10"
          lineColor="white"
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