import React from "react";
import upnvj_bg from "../../assets/img/upnvj_bg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Education = (props) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div data-aos="fade-right">
            <h1 className={`mt-5 mb-10 text-5xl font-extrabold ${props.color} text-center`}>EDUCATION</h1>
            <div className="flex flex-col lg:flex-row gap-12 items-center px-10">
                <img src={upnvj_bg} className="rounded-xl w-11/12 lg:w-1/2"/>
                <div className="place-items-start text-container justify-center flex w-11/12 lg:w-1/2">
                    <div>
                        <h1 className={`text-3xl font-extrabold text-center ${props.color}`}>University of Pembangunan Nasional “Veteran” Jakarta</h1>
                        <br />
                        <p className="text-sm font-semibold text-justify">
                        {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;