import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Photos = (props) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className={`flex-col ${props.color} text-center p-10 bg-white rounded-lg shadow-lg w-fit h-fit cursor-pointer transition-all`} data-aos="fade-right">
            <img src={props.icon} className="p-6"></img>
            <p className="font-bold mb-2 text-lg text-center">{props.title}</p>
        </div>
    );
}

export default Photos;