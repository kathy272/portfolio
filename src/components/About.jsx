import React from "react";
import { motion } from "framer-motion";
import { areas } from "../constants";
import { Navbar, Contact } from "./";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
const base = import.meta.env.BASE_URL;
import ModelCanvas from "./canvas/ModelMain";
import {
    Experience
} from './';

const About = () => {
    return (
        <div className="min-h-screen bg-primary">
            <Navbar />
            <main className="max-w-[90vw] pt-[170px] pb-[50px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-0  lg:gap-[7vw]">

                    <img src={`${base}image_about.jpeg`} className="lg:w-[40vw] h-auto object-cover" alt="image of Katharina in front of the sea" />

                    <div className="relative top-10 lg:top-0">

                        <motion.div variants={{ textVariant: textVariant(0.1) }}>
                            <h2 className=" text-secondary  font-light  md:text-[70px] sm:text-[60px] xs:text-[50px] leading-tight text-[30px]">Hi! Nice to meet you!</h2>
                        </motion.div>
                        <div>
                        </div>

                        <motion.div variants={fadeIn("up", "spring", 0.1, 1)}
                            className=" text-justify text-pretty text-secondary text-[17px] md:pr-20 xl:pr-10  max-w-6xl pt-5 leading-[30px]">
                            My name is Katharina, but if you've read this far, you can call me Kathy!
                            <br />
                            Born and raised in Salzburg, Austria. When I was growing up, I was always into art, gaming and stories. I remember hiding under my blanket to secretly play another round of Mario, solve puzzles with Professor Layton, or build a hotel in The Sims 2 on my old Nintendo DS, and whenever I wasn’t gaming, I was drawing or reading.
                            <br />
                            But the one thing that always stuck with me was storytelling, building whole worlds in my mind while creating or reading. I was very much a homebody because, honestly, why leave the house when I could have countless adventures in my mind?
                            <br />
                            Then, at 19, I moved to Vienna to become a flight attendant. And I started to travel. Now, suddenly, I could jump into these adventures myself. I wandered through the ancient city of Petra, crossed the Jordanian desert, worked in a lab at the University of Colorado, spent a night camping in Yellowstone, hiked through Australia, and saw hundreds of waterfalls in Milford Sound.
                            <br />
                            Now those experiences have become something I bring into my creative project. These adventures, places, people, and perspectives are now stored in my personal reference library. And I've learned that the best references aren't always found online. More often than not, they're found in real life.</motion.div>
                        <motion.div variants={fadeIn("up", "spring", 0.1, 1)}
                            className=" text-justify text-pretty text-secondary text-[17px] pt-5 md:pr-20 xl:pr-0 max-w-6xl ">
                            <h2 className=" text-secondary font-light uppercase md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]">Skills:</h2>
                            <div className="flex flex-col md:flex-row md:flex-wrap px-10 gap-10 justify-between  ">
                                <div>
                                    <li className="text-secondary text-[17px] md:pr-20 xl:pr-0 max-w-6xl leading-[30px]">UI/UX Design</li>
                                    <li className="text-secondary text-[17px] md:pr-20 xl:pr-0 max-w-6xl leading-[30px]">Front-end Development</li>
                                    <li className="text-secondary text-[17px] md:pr-20 xl:pr-0 max-w-6xl leading-[30px]">Illustration</li>
                                </div>
                                <div className="relative top-[-35px] lg:top-0">
                                    <li className="text-secondary text-[17px] md:pr-20 xl:pr-0 max-w-6xl leading-[30px]">3D Modeling and Texturing</li>
                                    <li className="text-secondary text-[17px] md:pr-20 xl:pr-0 max-w-6xl leading-[30px]">Creative Coding</li>
                                </div>
                            </div>
                        </motion.div>
                    </div>




                </div>



            </main>
            <Experience />
            <div className="relative z-0">
                <Contact />
            </div>
        </div>
    )

}

export default About;