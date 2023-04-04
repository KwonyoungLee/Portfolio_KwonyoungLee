import React from 'react';
import Image from 'next/image'
import Fade from "react-reveal";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { IoChevronUp } from "react-icons/io5";
import web1 from '../public/web1.png'

const Footer = () => {
    return (
        <section id="works" className='py-40 bg-neutral-400'>
            <div className="p-10 md:px-20 lg:max-w-7xl text-neutral-900 container">
                <div>
                    <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-stone-200 sm:text-4xl">
                        <span className="text-pink-700">My</span>
                        "work"
                    </h1>
                </div>
                <div className="relative w-full grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-6 md:grid-cols-2">
                    <a className="relative overflow-hidden rounded-xl shadow-xl shadow-black/30 col-span-1 flex aspect-video">
                    <Image alt="React portfolio" src={web1}/>
                    </a>
                    <a className="relative overflow-hidden rounded-xl shadow-xl shadow-black/30 col-span-1 flex aspect-video">
                    <Image alt="React portfolio" src={web1}/>
                    </a>
                    <a className="relative overflow-hidden rounded-xl shadow-xl shadow-black/30 col-span-1 flex aspect-video">
                    <Image alt="React portfolio" src={web1}/>
                    </a>
                    <a className="relative overflow-hidden rounded-xl shadow-xl shadow-black/30 col-span-1 flex aspect-video">
                    <Image alt="React portfolio" src={web1}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer