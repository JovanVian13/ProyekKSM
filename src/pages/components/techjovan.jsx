import React from "react";
import Card from './elements/cards'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";
import { DiHtml5, DiCss3, DiJavascript, DiPython, DiPhp, DiJava, DiReact } from "react-icons/di";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { FaHandshake, FaPeopleArrows, FaRegLightbulb, FaFlag, FaChartLine, FaBootstrap } from "react-icons/fa";
import { MdPhoneInTalk, MdWork } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";


const Techjovan = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="w-full items-center text-center mt-5 justify-center bg-gradient-to-r from-bgColorjo to-backColorjo" data-aos="fade-right">
            <div className="items-center justify-center">
                <h1 className="text-6xl py-5 font-bold text-white">HARD SKILLS</h1>
            </div>
            <div className="flex flex-wrap py-5 justify-center items-center gap-8 w-11/12 mx-auto">
                <Card
                color="text-defaultColorjo"
                icon={<DiHtml5 size={90}/>}
                title={"HTML"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<DiCss3 size={90}/>}
                title={"CSS"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<DiJavascript size={90}/>}
                title={"JavaScript"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<DiPython size={90}/>}
                title={"Python"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<DiPhp size={90}/>}
                title={"PHP"}
                ></Card>
                
                <Card
                color="text-defaultColorjo"
                icon={<DiJava size={90}/>}
                title={"Java"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<SiMysql size={90}/>}
                title={"MySQL"}
                ></Card>
                
                <Card
                color="text-defaultColorjo"
                icon={<DiReact size={90}/>}
                title={"React JS"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<SiTailwindcss size={90}/>}
                title={"Tailwind"}
                ></Card>
                
                <Card
                color="text-defaultColorjo"
                icon={<FaBootstrap size={90}/>}
                title={"BootStrap"}
                ></Card>
            </div>

            <div className="items-center justify-center">
                <h1 className="text-6xl mt-20 py-5 font-bold text-white">SOFT SKILLS</h1>
            </div>
            
            <div className="flex flex-wrap py-5 justify-center items-center gap-8 w-11/12 mx-auto">
                <Card
                color="text-defaultColorjo"
                icon={<MdPhoneInTalk size={100}/>}
                title={"Communication"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<FaPeopleArrows size={100}/>}
                title={"Teamwork"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<FaChartLine size={100}/>}
                title={"Adaptability"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<FaFlag size={100}/>}
                title={"Leadership"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<FaRegLightbulb  size={100}/>}
                title={"Critical thinking"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<GiTeamIdea size={100}/>}
                title={"Creativity"}
                ></Card>
                
                <Card
                color="text-defaultColorjo"
                icon={<FaHandshake size={100}/>}
                title={"Problem-Solving"}
                ></Card>

                <Card
                color="text-defaultColorjo"
                icon={<MdWork size={100}/>}
                title={"Practicality"}
                ></Card>
            </div>
        </div>
    )
}

export default Techjovan;