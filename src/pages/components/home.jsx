import React from 'react';
import Button from './elements/button';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Home = (props) => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });

  const download = () => {
    const link = document.createElement("a");
    link.href = `${props.link}`;
    link.download = `${props.download}`;
    link.click();
  };

  return (
    <div className={`flex bg-gradient-to-r ${props.from} ${props.to} min-h-screen items-center justify-center gap-3`} data-aos="fade-right">
      <div className='p-10 w-1/2'>
        <h1 className='text-4xl font-extrabold text-white'>Hi I'm</h1>
        <h1 className={`text-4xl font-extrabold ${props.text}`}>{props.name}</h1>
        <h1 className='text-4xl font-extrabold text-black'>{props.role}</h1>
        <br />
        <Button 
        children={"Download CV"}
        defaultColor={props.color}
        click={download}
        margin="text-white"
        />
      </div>
      <div>
        <img src={props.img} className='w-full object-cover h-96 rounded-lg'/>
      </div>
    </div>
  );
};

export default Home;