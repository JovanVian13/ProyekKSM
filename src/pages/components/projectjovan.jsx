import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import jovport2 from "../../assets/img/jovport2.jpg";
import jovport1 from "../../assets/img/jovport1.jpg";
import Photos from "./elements/photos";

const Projectjovan = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="w-full items-center text-center mt-5 justify-center bg-gradient-to-r from-bgColorjo to-backColorjo" data-aos="fade-right">
            <div className="items-center justify-center">
                <h1 className="text-6xl py-5 font-bold text-white">Projects</h1>
            </div>
            <div className="flex py-5 justify-center items-center gap-8 w-11/12 mx-auto">
                <Photos
                color="text-defaultColorjo"
                icon={jovport1}
                title={"Project JoHome"}
                ></Photos>
                <Photos
                color="text-defaultColorjo"
                icon={jovport2}
                title={"Project Thesis"}
                ></Photos>
            </div>
        </div>
    );
}

export default Projectjovan;