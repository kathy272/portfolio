import React from "react";
import {useState,useRef} from "react";
import {styles} from '../styles';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
//import {ContactModel} from "./canvas";
import { slideIn } from "../utils/motion";  
import BubbleCanvas from "./canvas/BubbleCanvas";


const Contact =() => {
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
    return(
        <div         id="contact"

        className="xl:mt-12 pt-[150px] flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-contact">

        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75]  sm:px-16 px-6 sm:py-20 py-15"
        >
            <p className="sm:text-[18px] text-[14px] text-teritary uppercase tracking-wider pt-[120px]">Get in touch!</p>
            <h3 className= "text-teritary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact Me</h3>
         
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
                            className="bg-teritary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
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
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[500px] pt-[150px]">
            {/* <ContactModel /> */}    
            <BubbleCanvas />

        </motion.div>

              </div>
  
    );
    };

    


export default Contact;