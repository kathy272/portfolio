import React from "react";
import { useState, useRef } from "react";
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { slideIn } from "../utils/motion";
import BubbleCanvas from "./canvas/BubbleCanvas";
import LinkedIn from "/icons/linkedIn.svg"
const base = import.meta.env.BASE_URL;

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Recipient Name",
                    from_email: form.email,
                    to_email: "kendlbacherkatharina@gmail.com",

                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Something went wrong.");
                }
            );

    }
    return (
        <div className=" bg-contact">
            <div id="contact"

                className="xl:mt-12 pt-[150px] flex lg:flex-row flex-col-reverse gap-10 ">

                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className="flex-1 sm:pl-16 px-6 w-full lg:w-2/5 xl:w-1/2 sm:py-10 py-15"
                >
                    <img src={`${base}me_drawing_2.png`} className="absolute w-[220px] sm:w-[300px] lg:w-[400px] 2xl:w-[500px] h-auto mt-[-150px] sm:mt-[-200px] lg:mt-[410px]  xl:mt-[410px]  z-10 sm:end-5 end-[0px] lg:end-[220px] xl:end-[260px] 2xl:end-[210px]" alt="drawing of me" />

                    <p className="sm:text-[18px] text-[14px] text-teritary uppercase tracking-wider xl:pt-[100px]">Wanna say hi?</p>
                    <h3 className="text-teritary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact <span className="text-[#69B8E4]">Me!</span></h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-8">

                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Message</span>
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What do you want to say?"
                                className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow
                                        hover:bg-secondary transition-colors duration-300 rounded-xl"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1
                    )}
                    className="md.flex-1  w-full h-[500px] sm:h-[700px] lg:w-1/2 lg:h-[600px] xl:w-2/5 xl:h-[800px] xl:mt-[-150px] xl:pt-[400px] xl:pt-[200px] 2xl:h-[1000px] xl:h-[650px] 2xl:w-1/2 pt-[150px]">
                    <BubbleCanvas />

                </motion.div>


            </div>

            <div className="flex flex-col">
                <div className=" flex flex-col md:flex-row px-[5px]  md:px-[100px] xl:px-[160px] w-full justify-between ">
                    <h1 className="sm:text-[32px] hidden sm:block pt-10 sm:py-10 text-[24px] uppercase tracking-widest">Portfolio</h1>
                    <div className="flex flex-col  w-full sm:w-1/2 py-10 " >
                        <p className=" text-right"> kendlbacherkatharina@gmail.com</p>
                        <p className="text-right ">Download my CV&nbsp;
                            <a href={`${base}Resume/CV_2025.pdf`} download="Kendlbacher_CV.pdf" className="underline uppercase">
                                Here
                            </a>
                        </p>
                        <a href="https://www.linkedin.com/in/katharina-kendlbacher-10a3212b1" className="underline pt-1  w-full ">
                            <img src={LinkedIn} alt="linkedIn" className="w-5 h-auto ms-auto" />
                        </a>
                    </div>



                </div>
                <hr className="opacity-50  w-5/6 self-center"></hr>
                <p className="text-right self-center py-10 text-white opacity-50 font-medium lg:text-[20px] sm:text-[16px] text-[16px] lg:leading-[40px]">
                    © 2025 Kendlbacher. All rights reserved.
                </p>


            </div>
        </div>
    );
};




export default Contact;