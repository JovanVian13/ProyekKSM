import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Footer = (props) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div className="w-full items-center justify-center bg-white" data-aos="fade-up">
            <div className="flex w-full flex-col md:flex-row p-8 md:px-28">
                <div className="w-full md:w-1/4">
                    <h1 className={`font-semibold text-3xl pb-2 ${props.text}`}>Contact Me</h1>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className={`font-semibold text-xl pb-2 ${props.text}`}>Phone</h1>
                    <a className={`text-sm font-semibold hover:${props.hover} ${props.text}`} href={props.phonelink}>{props.phone}</a>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className={`font-semibold text-xl pb-2 ${props.text}`}>Email</h1>
                    <a className={`text-sm font-semibold hover:${props.hover} ${props.text}`} href={props.emaillink}>{props.email}</a>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className={`font-semibold text-xl pb-2 ${props.text}`}>LinkedIn</h1>
                    <a className={`text-sm font-semibold hover:${props.hover} ${props.text}`} href={props.linkedinlink}>{props.name}</a>
                </div>
            </div>
            <div className="w-full">
                <p className="text-center mt-2 py-2 font-semibold">&copy; 2024 {props.name} | All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;