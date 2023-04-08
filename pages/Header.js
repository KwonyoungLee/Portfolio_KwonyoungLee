import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Kwon from '../public/kwon.png';
import Fade from "react-reveal";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";


const Header = () => {


  
  const [homeClick, sethClick] = useState(true)
  const [aboutClick, setaClick] = useState(false)
  const [resumeClick, setrClick] = useState(false)
  const [worksClick, setwClick] = useState(false)
  const [contactClick, setcClick] = useState(false)
  const [backcolor, setbg] = useState(false)

  const changeBackground = () => {
    if(window.scrollY < 1200){
      sethClick(true)
      setaClick(false)
      setrClick(false)
      setwClick(false)
      setcClick(false)
      setbg(false)
    }
    else if(window.scrollY >= 1200 && window.scrollY < 2216){
      sethClick(false)
      setaClick(true)
      setrClick(false)
      setwClick(false)
      setcClick(false)  
      setbg(false)
    }
    else if(window.scrollY >= 2216 && window.scrollY < 4194){
      sethClick(false)
      setaClick(false)
      setrClick(true)
      setwClick(false)
      setcClick(false)  
      setbg(true)
    }
    else if(window.scrollY >= 4194 && window.scrollY < 5266){
      sethClick(false)
      setaClick(false)
      setrClick(false)
      setwClick(true)
      setcClick(false)  
    }
    else if(window.scrollY >= 5266){
      sethClick(false)
      setaClick(false)
      setrClick(false)
      setwClick(false)
      setcClick(true)  
      setbg(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  });


  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf5adad,
          backgroundColor: 0x100f11
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef} className="min-h-screen">
      <section id="home">
        <div className='text-center py-10'>
          <div className={backcolor ? 'w-full py-10 bg-neutral-500 text-white font-bold text-xl fixed top-0 z-10' : 'w-full py-10 bg-transparent text-white font-bold text-xl fixed top-0 z-10'}>
            <ul className='items-center justify-center flex space-x-6'>
              <li>
                <a href="#home" className={homeClick ? 'active' : ''}>HOME</a>
              </li>
              <li>
                <a href="#about" className={aboutClick ? 'active' : ''}>ABOUT</a>
              </li>
              <li>
                <a href="#resume" className={resumeClick ? 'active' : ''}>RESUME</a>
              </li>
              <li>
                <a href="#works" className={worksClick ? 'active' : ''}>WORKS</a>
              </li>
              <li>
                <a href="#contact" className={contactClick ? 'active' : ''}>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      <Fade bottom duration={1200}>
            <div className="text-center p-10 pt-56">
              <h2 className="text-5xl py-2 text-white font-bold md:text-6xl lg:text-7xl">
                Kwonyoung Lee
              </h2>
              <h3 className="text-2xl py-2 text-gray-400 md:text-3xl">
                Front-End Developer and Data Analysist.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-400 max-w-xl mx-auto md:text-xl">
                I am a creative and analytical individual with a passion for technology and data. 
                I am always seeking to expand my knowledge and skills in order to create better 
                and more effective digital solutions. 
                I am excited about the opportunity to work with like-minded individuals 
                and organizations who share my passion for innovation and excellence.
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                    <a href='https://www.linkedin.com/in/anna-lee-194478192/'>
                        <BsLinkedin className="text-4xl"/>
                    </a>
                    <a href='www.instagram.com'>
                        <BsInstagram className="text-4xl"/>
                    </a>
                    <a href='www.github.com'>
                        <BsGithub className="text-4xl"/>
                    </a>
              </div>
              <div className="mx-auto bg-gradient-to-b from-gray-400 overflow-hidden rounded-full w-60 h-60  mt-20 md:h-96 md:w-96">
                <Image src={Kwon}/>
              </div>
            </div>
            </Fade>
        </section>
        <div className="absolute inset-x-0 flex justify-center bottom-0">
                    <div className="rounded-full animate-bounce bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                    >
                      <a href="#about">
                    <AiOutlineArrowDown className="h-10 w-10 bg-transparent sm:h-10 sm:w-10" />
                      </a>
                    </div>
        </div>
    </div>
  );
};

export default Header