import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import karport2 from "../../assets/img/karport2.png";
import karport1 from "../../assets/img/karport1.png";
import Photos from "./elements/photos";

const Projectjovan = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="w-full items-center text-center mt-5 justify-center bg-gradient-to-r from-bgColorkar to-backColorkar" data-aos="fade-right">
            <div className="items-center justify-center">
                <h1 className="text-6xl py-5 font-bold text-white">Projects</h1>
            </div>
            <div className="flex py-5 justify-center items-center gap-8 w-11/12 mx-auto">
                <Photos
                color="text-defaultColorkar"
                icon={karport1}
                title={"Project Portfolio"}
                ></Photos>
                <Photos
                color="text-defaultColorkar"
                icon={karport2}
                title={"Project UTS"}
                ></Photos>
            </div>
        </div>
    );
}

export default Projectjovan;