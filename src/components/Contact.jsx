import React from "react";
import { useState, useRef } from "react";
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { slideIn } from "../utils/motion";
import BubbleCanvas from "./canvas/BubbleCanvas";
import ModelCanvas from "./canvas/ModelMain";
import LinkedIn from "/icons/linkedIn.svg"
const base = import.meta.env.BASE_URL;

const Contact = () => {
    const isAboutPage = window.location.pathname === "/about";
    const isHomePage = window.location.pathname === "/";
    return (
        <div className=" bg-contact">
            <div id="contact"

                className="xl:mt-10 pt-[150px] flex lg:flex-row flex-col-reverse gap-10 ">

                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className="flex-1 sm:pl-16 px-6 w-full lg:w-2/5 xl:w-1/2 pt-10 "
                >
                    {!isHomePage && (
                        <img
                            src={`${base}illustration_me.png`}
                            className="absolute w-[220px] sm:w-[400px] lg:w-[400px] 2xl:w-[500px] h-auto mt-[-150px] sm:mt-[-400px] lg:mt-[110px] xl:mt-[50px] z-10 sm:end-5 end-[0px] lg:end-[350px] 2xl:end-[280px]"
                            alt="Drawing of me"
                        />
                    )}


                    <h2 className=" text-teritary font-light uppercase md:text-[70px] pt-10 sm:text-[60px] xs:text-[50px] leading-tight text-[30px]">Let's <span className="text-[#69B8E4]">Talk!</span></h2>

                   <p className="text-teritary text-[17px] py-5 pb-10 leading-[30px] text-left">
                        If you have any questions, want to collaborate on a project, or just want to say hi, feel free to reach out! I'm always open to new opportunities and connections!
                    </p>
                   
<a
    href="mailto:kendlbacherkatharina@gmail.com?subject=Portfolio%20Inquiry"
    className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md
               hover:bg-secondary transition-colors duration-300 rounded-xl inline-block"
>
    Send me an email
</a>
                  
                </motion.div>
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1
                    )}
                    className="md.flex-1  w-full h-[500px] sm:h-[700px] lg:w-1/2 lg:h-[600px] xl:w-2/5 xl:h-[800px] xl:mt-[-300px] xl:pt-[400px] xl:pt-[200px] 2xl:h-[1000px] xl:h-[650px] 2xl:w-1/2 pt-[150px]">
                    {isHomePage ? <ModelCanvas /> : <BubbleCanvas />}
                </motion.div>
            </div>
            <div className="flex flex-col">
                <div className=" flex flex-col md:flex-row px-[5px]  md:px-[100px] xl:px-[160px] w-full justify-between ">
                    <h1 className="sm:text-[32px] hidden sm:block pt-10 sm:py-10 text-[24px] uppercase tracking-widest">Portfolio</h1>
                    <div className="flex flex-col  w-full sm:w-1/2 py-10 " >
                        <p className=" text-right"> kendlbacherkatharina@gmail.com</p>

                        <a href="https://www.linkedin.com/in/katharina-kendlbacher-10a3212b1" className="underline pt-1  w-full ">
                            <img src={LinkedIn} alt="linkedIn" className="w-5 h-auto ms-auto" />
                        </a>
                            <a href="/impressum" className=" no-underline hover:underline; text-right">
        Impressum
    </a>

    <a href="/privacy" className="no-underline hover:underline; text-right">
        Privacy Policy
    </a>
                    </div>

                </div>
                <hr className="opacity-50  w-5/6 self-center"></hr>
                <p className="text-right self-center py-10 text-white opacity-50 font-medium lg:text-[20px] sm:text-[16px] text-[16px] lg:leading-[40px]">
                    © 2026 Kendlbacher. All rights reserved.
                </p>
            </div>
        </div>
    );
};




export default Contact;