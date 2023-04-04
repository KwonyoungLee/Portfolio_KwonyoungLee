import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Kwon from '../public/kwon.png';
import Fade from "react-reveal";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";


const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

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
      <section>
        <div className='bg-transparent text-center py-5'>
          <nav className='w-full text-white font-bold text-xl fixed text-center'>
            <ul className='items-center justify-center space-y-0 flex space-x-6'>
              <li>
                <a href='/' onClick={closeMenu}>HOME</a>
              </li>
              <li>
                <a href='#about' onClick={closeMenu}>ABOUT</a>
              </li>
              <li>
                <a href='#resume' onClick={closeMenu}>RESUME</a>
              </li>
              <li>
                <a href='#works' onClick={closeMenu}>WORKS</a>
              </li>
              <li>
                <a href='#contact' onClick={closeMenu}>CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>   
      <section>
          <Fade bottom duration={1200}>
            <div className="text-center p-10 pt-56">
              <h2 className="text-5xl py-2 text-white font-bold dark:text-white md:text-6xl lg:text-8xl">
                Kwonyoung Lee
              </h2>
              <h3 className="text-2xl py-2 text-gray-400 md:text-3xl">
                Front-End Developer and Data Analysist.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-400 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                I am a front-end development engineer and also data analysist.
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
              <div className="mx-auto bg-gradient-to-b from-gray-400 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <Image src={Kwon}/>
              </div>
            </div>
          </Fade>
        </section>
    </div>
  );
};

export default Header