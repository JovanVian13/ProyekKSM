import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Button from "./button";

const Choose = (props) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className={`flex-col text-defaultColor text-center p-3 bg-white rounded-lg shadow-lg w-fit h-fit cursor-pointer transition-all`} data-aos="fade-right">
            <img src={props.icon} className="w-full object-cover h-80 rounded-lg p-6"></img>
            <Button
            defaultColor="bg-defaultColor text-white"
            margin="mt-2 mb-2 w-full text-xl"
            >
                <a href={props.link}>{props.name}</a>
            </Button>
            <p className="font-bold mt-2 mb-2 text-md text-center">{props.prodi}</p>
            <p className="font-bold mb-2 text-md text-center">{props.nim}</p>
            <p className="font-bold mb-2 text-md text-center">KSM Web Development</p>
        </div>
    );
}

export default Choose;