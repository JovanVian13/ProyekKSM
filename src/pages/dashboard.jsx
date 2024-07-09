import React from 'react';
import Choose from './components/elements/choose'
import jovphoto from "../assets/img/jovanphoto.jpg";
import karphoto from "../assets/img/karinaphoto2.jpg";

function Dashboard() {
  return (
    <div className="flex flex-wrap bg-gradient-to-r from-fromColor to-toColor min-h-screen items-center justify-center gap-20">
        <div>
            <p className='text-8xl font-extrabold text-white'>Welcome!</p>
            <p className='text-5xl font-extrabold text-purple-950'>Choose Your Student</p>
        </div>
        <Choose
        icon={jovphoto}
        prodi={"S1 Sistem Informasi"}
        name={"Jovan Vian Thendra"}
        nim={"2210512041"}
        link="/jovan"
        ></Choose>
        <Choose
        icon={karphoto}
        prodi={"S1 Sistem Informasi"}
        name={"Karina Ghaisani"}
        nim={"2210512028"}
        link="/karina"
        ></Choose>
    </div>
  )
}

export default Dashboard
