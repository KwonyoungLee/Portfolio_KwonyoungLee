import React from 'react'
import Slide from "react-reveal";

const Resume = () => {
    return (
    <section id="resume">
            <Slide left duration={1300}>
            <div className="p-10 dark:bg-gray-900 md:px-20 lg:max-w-8xl container py-52">
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:justify-start pb-10">
                        <div className="relative h-max">
                        <h2 className="text-2xl font-bold uppercase text-neutral-800">Education</h2>
                        <span className="absolute inset-x-0 -bottom-1 border-b-4 border-pink-400" />
                        </div>
                    </div>
                    <div className="col-span-1 flex text-3xl flex-col md:col-span-3">
                        <div>
                            <h2 className="text-4xl  font-bold  text-neutral-800">University of Texas at Dallas</h2>
                            <p className="italic font-semibold text-3xl py-5 text-neutral-600">
                                Master's in Computer Science <span>&bull;</span>
                                <em className="text-lg">August 2021 - May 2023</em>
                            </p>
                            <p className="py-8 text-2xl text-neutral-500">Cousework: Big Data Management, Database System, Machine Learning, Web Programming Languages</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold  text-neutral-800">University of Texas at Dallas</h2>
                            <p className="italic font-semibold text-3xl py-5  text-neutral-600">
                                Bachelor's in Computer Science <span>&bull;</span>
                                <em className="text-lg">August 2018 - May 2021</em>
                            </p>
                            <p className="py-8 text-2xl text-neutral-500">Cousework: Advanced Algorithm Design & Analysis, Database System, Human Computer Interaction</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <div className="relative h-max">
                        <h2 className="text-2xl font-bold uppercase text-neutral-800">Skills</h2>
                        <span className="absolute inset-x-0 -bottom-1 border-b-4 border-pink-400" />
                        </div>
                    </div>
                    <div className="col-span-1 flex text-3xl flex-col md:col-span-3">
                        <div className="flex flex-col py-8">
                            <span className="ml-2 py-3 text-2xl font-semibold uppercase">Python</span>
                            <div className="h-12 w-full overflow-hidden rounded-full bg-neutral-300">
                                    <div className="h-full rounded-full w-4/5 bg-orange-400"/>
                            </div>
                        </div>
                        <div className="flex flex-col py-8">
                            <span className="ml-2 py-3 text-2xl font-semibold uppercase">Javascript</span>
                            <div className="h-12 w-full overflow-hidden rounded-full bg-neutral-300">
                                    <div className="h-full rounded-full w-4/5 bg-blue-500"/>
                            </div>
                        </div>
                        <div className="flex flex-col py-8">
                            <span className="ml-2 py-3 text-2xl font-semibold uppercase">ReactJS</span>
                            <div className="h-12 w-full overflow-hidden rounded-full bg-neutral-300">
                                    <div className="h-full rounded-full w-4/5 bg-red-400"/>
                            </div>
                        </div>
                        <div className="flex flex-col py-8">
                            <span className="ml-2 py-3 text-2xl font-semibold uppercase">Java</span>
                            <div className="h-12 w-full overflow-hidden rounded-full bg-neutral-300">
                                    <div className="h-full rounded-full w-3/5 bg-green-400"/>
                            </div>
                        </div>
                        <div className="flex flex-col py-8">
                            <span className="ml-2 py-3 text-2xl font-semibold uppercase">C++</span>
                            <div className="h-12 w-full overflow-hidden rounded-full bg-neutral-300">
                                    <div className="h-full rounded-full w-2/5 bg-purple-400"/>
                            </div>
                        </div>
                        <div className="flex flex-col py-8">
                            <span className="ml-2 py-3 text-2xl font-semibold uppercase">SQL</span>
                            <div className="h-12 w-full overflow-hidden rounded-full bg-neutral-300">
                                    <div className="h-full rounded-full w-3/5 bg-yellow-400"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Slide>
      </section>
    )
}

export default Resume