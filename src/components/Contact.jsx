import React from "react";
import {useState,useRef} from "react";
import {styles} from '../styles';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
//import {ContactModel} from "./canvas";
import { slideIn } from "../utils/motion";  

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
        <div
        className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
            <p className={styles.sectionSubText}>Get in touch!</p>
            <h3 className={styles.sectionHeadText}>Contact</h3>
         
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
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
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
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
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
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
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
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[500px]">
            {/* <ContactModel /> */}    
        </motion.div>

              </div>
  
    );
    };

    


export default SectionWrapper(Contact, "contact");