import React from 'react';
import Fade from "react-reveal";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { IoChevronUp } from "react-icons/io5";


const Footer = () => {
    return (
        <footer>
        <Fade bottom>
            <div className="relative bg-neutral-900 py-18 sm:px-8 sm:pt-14 sm:pb-8">
                <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
                <a
                    className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                    href='/'>
                    <IoChevronUp className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
                </a>
                </div>
                <div className="flex flex-col items-center gap-y-6">
                <div className="flex gap-x-4 text-neutral-500 text-3xl">
                    <a href='https://www.linkedin.com/in/anna-lee-194478192/'>
                        <BsLinkedin />
                    </a>
                    <a href='www.instagram.com'>
                        <BsInstagram />
                    </a>
                    <a href='www.github.com'>
                        <BsGithub />
                    </a>
                </div>
                <span className="text-lg text-neutral-700">© Copyright 2023 Kwonyoung Lee</span>
                </div>
            </div>       
        </Fade>
      </footer>
    )
}

export default Footer