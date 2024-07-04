import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoIosClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import Button from "./elements/button";

const Navbar = (props) => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
      setMenu(!menu);
    };
  
    const closeMenu = () => {
      setMenu(false);
    };
  
    useEffect(() => {
      Aos.init({
        once: true,
        duration: 1000,
      });
    }, []);
  
    return (
        <div className="fixed w-full z-10" data-aos="fade-down">
            <div>
                <div className={`flex flex-row p-6 ${props.bg} items-center`}>
                    <div className="flex-row items-center">
                        <h1 className="ml-10 text-white font-bold text-4xl">{props.name}</h1>
                    </div>
                    <nav className="ml-32 hidden md:flex flex-row items-center text-2xl font-semibold gap-20">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-black transition-all cursor-pointer text-white"
                        >
                        Home
                        </Link>

                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-black transition-all cursor-pointer text-white"
                        >
                        About
                        </Link>

                        <Link
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-black transition-all cursor-pointer text-white"
                        >
                        Skills
                        </Link>
                        
                        <Link
                            to="education"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-black transition-all cursor-pointer text-white"
                        >
                        Education
                        </Link>

                        <Link
                            to="project"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-black transition-all cursor-pointer text-white"
                        >
                        Project
                        </Link>
                        <Button defaultColor={`bg-white hover:bg-black ${props.text}`}><a href={props.link}>Back</a></Button>
                    </nav>
                    <div className="lg:hidden flex items-center">
                        {menu ? (
                        <IoIosClose
                            size={28}
                            onClick={handleChange}
                            className="text-white"
                        />
                        ) : (
                        <MdMenu
                            size={28}
                            onClick={handleChange}
                            className="text-white"
                        />
                        )}
                    </div>
                </div>
                <div className={` ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute ${props.bg} text-white top-20 font-semibold text-2xl text-center gap-8 pt-8 pb-4 w-full h-fit`}>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-black cursor-pointer text-white font-semibold"
                        onClick={closeMenu}
                    >
                    Home
                    </Link>
                    
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-black cursor-pointer text-white font-semibold"
                        onClick={closeMenu}
                    >
                    About
                    </Link>
                    
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-black cursor-pointer text-white font-semibold"
                        onClick={closeMenu}
                    >
                    Skills
                    </Link>

                    <Link
                        to="education"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-black cursor-pointer text-white font-semibold"
                        onClick={closeMenu}
                    >
                    Education
                    </Link>

                    <Link
                        to="project"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-black cursor-pointer text-white font-semibold"
                        onClick={closeMenu}
                    >
                    Project
                    </Link>
                    <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-black cursor-pointer text-white font-semibold"
                    onClick={closeMenu}
                    >
                    Back
                    </Link>
                </div>
            </div>
        </div>           
    );
};


export default Navbar;