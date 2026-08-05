import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import logo from '../assets/logo_new.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {

    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (

        <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary"
        >
            <div className="w-full max-w-[90vw]  flex justify-between items-center w-full mx-auto border-b ">
                <Link to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>

                    <img src={logo} alt="logo" className="w-12 object-contain" />

                </Link>



                <ul className="hidden gap-10 sm:flex">
                    <li>
                        <Link to="/about" className="text-[18px] font-light text-secondary">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to="/#work" className="text-[18px] font-light text-secondary">
                            Work
                        </Link>
                    </li>

                    <li>
                        <Link to="/#contact" className="text-[18px] font-light text-secondary">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="flex list-none flex-col items-start gap-4">
                            <li>
                                <Link to="/#about" onClick={() => setToggle(false)}>
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/#work" onClick={() => setToggle(false)}>
                                    Work
                                </Link>
                            </li>

                            <li>
                                <Link to="/#contact" onClick={() => setToggle(false)}>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>)
}
export default Navbar