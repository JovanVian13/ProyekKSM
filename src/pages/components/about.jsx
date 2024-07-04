import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = (props) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div className="items-center justify-center flex gap-14" data-aos="fade-right">
            <div className="items-center text-container justify-center flex mt-20">
                <div className="w-2/3">
                    <h1 className={`text-5xl font-extrabold ${props.color} text-center`}>ABOUT ME</h1>
                    <br />
                    <p className="text-sm font-semibold text-justify mb-20">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;