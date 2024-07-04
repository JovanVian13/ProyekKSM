import React from "react";
import Card from './elements/cards'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";
import { DiHtml5, DiCss3, DiJavascript } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaHandshake, FaPeopleArrows, FaRegLightbulb, FaChartLine, FaFigma, FaClock } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { BiLogoGit, BiLogoGithub } from "react-icons/bi";
import { MdPhoneInTalk, MdWork } from "react-icons/md";

const Techkar = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="w-full items-center text-center mt-5 justify-center bg-gradient-to-r from-bgColorkar to-backColorkar" data-aos="fade-right">
            <div className="items-center justify-center">
                <h1 className="text-6xl py-5 font-bold text-white">HARD SKILLS</h1>
            </div>
            <div className="flex flex-wrap py-5 justify-center items-center gap-8 w-11/12 mx-auto">
                <Card
                color="text-defaultColorkar"
                icon={<DiHtml5 size={90}/>}
                title={"HTML"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<DiCss3 size={90}/>}
                title={"CSS"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<DiJavascript size={90}/>}
                title={"JavaScript"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<BiLogoGit size={90}/>}
                title={"Git"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<BiLogoGithub size={90}/>}
                title={"GitHub"}
                ></Card>
                
                <Card
                color="text-defaultColorkar"
                icon={<FaFigma size={90}/>}
                title={"Figma"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<SiTailwindcss size={90}/>}
                title={"Tailwind"}
                ></Card>
            </div>

            <div className="items-center justify-center">
                <h1 className="text-6xl mt-20 py-5 font-bold text-white">SOFT SKILLS</h1>
            </div>
            
            <div className="flex flex-wrap py-5 justify-center items-center gap-8 w-11/12 mx-auto">
                <Card
                color="text-defaultColorkar"
                icon={<FaPeopleArrows size={100}/>}
                title={"Teamwork"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<MdPhoneInTalk size={100}/>}
                title={"Communication"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<FaChartLine size={100}/>}
                title={"Adaptability"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<FaClock size={100}/>}
                title={"Productivity"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<FaRegLightbulb  size={100}/>}
                title={"Critical thinking"}
                ></Card>

                <Card
                color="text-defaultColorkar"
                icon={<GiTeamIdea size={100}/>}
                title={"Creativity"}
                ></Card>
                
                <Card
                color="text-defaultColorkar"
                icon={<FaHandshake size={100}/>}
                title={"Problem-Solving"}
                ></Card>
            </div>
            <br />
        </div>
    )
}

export default Techkar;