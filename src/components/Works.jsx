import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { useState } from "react";



const WorksCard = ({ index, slug, name, sub, short, cover, }) => {
  return (
    // <Link to={`/projects/${name}`} className="group">
    <Link to={`/projects/${slug}`} className="group block">
      <div className="w-full py-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full">
          <div className="relative overflow-hidden">
<img
  src={cover}
  alt={name}
  loading="lazy"
  decoding="async"
  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
/>          <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-secondary text-[22px] w-full pt-5 font-light text-left ">{name}: {sub}</h3>
          </div>
        </motion.div>
      </div>
    </Link>

  );
};
const Works = () => {
const [selectedTag, setSelectedTag] = useState("Featured");
  const tags = [...new Set(projects.flatMap(p => p.tags))].sort();

const allTags = ["Featured", "All", ...tags];

  const filteredProjects =
  selectedTag === "Featured"
    ? projects.filter(project => project.featured)
    : selectedTag === "All"
      ? projects
      : projects.filter(project =>
          project.tags.includes(selectedTag)
        );

  return (
    <>
      <motion.div variants={textVariant()} className="max-w-[90vw] ">
        <h2 className=" text-secondary font-light uppercase md:text-[70px] sm:text-[60px] xs:text-[50px] leading-tight text-[30px]">My Work</h2>


        <p
          className="text-secondary text-[17px] py-5 leading-[30px] text-left">
          I enjoy experimenting with different technologies and creative disciplines, so you'll find a mix of UI/UX design, front end development, 3D, illustration, and interactive experiences throughout these projects:
        </p>
        <div className="flex flex-wrap pb-5 gap-4 ">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`
                  px-4 p-2 rounded-full transition-all duration-300
                  ${selectedTag === tag
                  ? "bg-secondary text-primary"
                  : "border border-secondary text-secondary hover:bg-secondary/10"
                }
            `}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <WorksCard
            key={project.name}
            index={index}
            {...project}
          />
        ))}
      </div>

    </>
  );
}
export default SectionWrapper(Works, "work");