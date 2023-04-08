import React from 'react';
import Image from 'next/image'
import portImg from '../public/port_kwon.png'
import fitImg from '../public/fitness.png'
import tahbImg from '../public/tahb.png'
import rnnImg from '../public/stock prediction.png'

const Footer = () => {
    return (
        <section id="works" className='py-40 bg-neutral-400'>
            <div className="p-10 md:px-20 lg:max-w-7xl text-neutral-900 container">
                <div>
                    <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-stone-200 sm:text-4xl">
                        <span className="text-pink-700">My </span>
                        Projects
                    </h1>
                </div>
                <div className="relative w-full grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-6 md:grid-cols-2">
                    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-neutral-300">
                        <Image alt="React portfolio website preview" className="w-full" src={portImg}/>
                        <div class="px-6 py-4 text-center">
                            <div className="font-bold text-2xl mb-10">My Portfolio</div>
                                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-8 my-3 py-2 px-4 rounded ">
                                    <a href="https://github.com/KwonyoungLee/Portfolio_KwonyoungLee">Code</a></button>
                                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-8 my-3 py-2 px-4 rounded ">
                                    <a href="#home">Demo</a></button>
                        </div>
                        <div className="px-6 pt-4 pb-2 text-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">javascript</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">next.js</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">react.js</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind css</span>
                        </div>
                    </div>
                    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-neutral-300">
                        <Image alt="React portfolio website preview" className="w-full" src={fitImg}/>
                        <div class="px-6 py-4 text-center">
                            <div className="font-bold text-2xl mb-10">Fitness Equipment Website</div>
                                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-8 my-3 py-2 px-4 rounded ">
                                    <a href="https://github.com/KwonyoungLee/FitnessEquipSite">Code</a></button>
                                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-8 my-3 py-2 px-4 rounded ">
                                    <a href="https://fitness-equip-site-269p-aaxpqwpii-kwonyounglee.vercel.app/">Demo</a></button>
                        </div>
                        <div className="px-6 pt-4 pb-2 text-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">javascript</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">node.js</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">express.js</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                        </div>
                    </div>
                    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-neutral-300">
                        <Image alt="React portfolio website preview" className="w-full" src={tahbImg}/>
                        <div class="px-6 py-4 text-center">
                            <div className="font-bold text-2xl mb-10">Medical Record Website</div>
                            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-8 my-3 py-2 px-4 rounded ">
                                <a href="https://github.com/KwonyoungLee/Medicare">Code</a></button>
                            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-8 my-3 py-2 px-4 rounded ">
                                <a href="https://kwonyounglee.github.io/markup/">Demo</a></button>
                        </div>
                        <div className="px-6 pt-4 pb-2 text-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">javascript</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">jquery</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PostgreSQL</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Go</span>
                        </div>
                    </div>
                    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-neutral-300">
                        <Image alt="Stock Prediction using RNN" className="w-full" src={rnnImg}/>
                        <div class="px-6 py-4 text-center">
                            <div className="font-bold text-2xl mb-10">Stock Prediction using RNN</div>
                                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-8 my-3 py-2 px-4 rounded ">
                                    <a href="https://github.com/KwonyoungLee/RNN_predict">Code</a></button>
                                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-8 my-3 py-2 px-4 rounded ">
                                    <a href="https://drive.google.com/file/d/1q7JQHbw4js_uZb3eHiZJDWCmLRG12d9F/view?usp=sharing">Paper</a></button>
                        </div>
                        <div className="px-6 pt-4 pb-2 text-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer