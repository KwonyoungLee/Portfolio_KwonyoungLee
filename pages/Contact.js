import React,{useState} from 'react';
import {Fade, Slide} from "react-reveal";
import { IoIosMail } from "react-icons/io";


const Contact = () => {
    
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if ( !field.name ) return;
            formData[field.name] = field.value;
        });
        fetch('api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData);
    }

    const inputClasses =
    'bg-neutral-700 h-14 w-4/5 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-pink-600 rounded-md placeholder:text-neutral-400 placeholder:text-2xl text-neutral-200 text-2xl';

    const messageClass =
    'bg-neutral-700 w-4/5 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-pink-600 rounded-md placeholder:text-neutral-400 placeholder:text-2xl text-neutral-200 text-2xl'

    return(
        <section id="contact" className='py-36 bg-neutral-800'>
            <div className="flex flex-col gap-y-6 justify-center items-center">
                <Fade bottom duration={1000}>
                <div className="flex flex-col gap-6 md:flex-row justify-center items-center">
                    <IoIosMail className="hidden h-24 w-24 text-white md:block" />
                    <h2 className="text-4xl font-bold text-white">Contact Me</h2>
                </div>
                </Fade>
                <Slide left duration={1000}>
                <div>
                    <div>
                        <form method="post" onSubmit={handleSubmit} className="grid min-h-[320px] gap-y-4 lg:min-w-[1000px] md:min-w-[600px] sm:min-w-[400px]">
                                <div className="py-8 font-semibold flex justify-between">
                                    <label htmlFor="name" className="text-white text-3xl">
                                    Name <span className="text-blue-700">*</span>
                                    </label>
                                    <input className={inputClasses} name="name" required type="text" />
                                </div>
                                <div className="py-8 font-semibold flex justify-between">
                                    <label htmlFor="email" className="text-white text-3xl">
                                        Email <span className="text-blue-700">*</span>
                                    </label>
                                    <input
                                        autoComplete="email"
                                        className={inputClasses}
                                        name="email"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div className="py-8 font-semibold flex justify-between">
                                    <label htmlFor="subject" className="text-white text-3xl">
                                        Subject
                                    </label>
                                    <input
                                        autoComplete="subject"
                                        className={inputClasses}
                                        name="subject"
                                    />
                                </div>
                                <div className="py-8 font-semibold flex justify-between">
                                    <label htmlFor="message" className="text-white text-3xl">
                                    Message <span className="text-blue-700">*</span>
                                    </label>
                                    <textarea
                                        className={messageClass}
                                        maxLength={250}
                                        name="message"
                                        required
                                        rows={6}
                                    />
                                </div>
                                <div className="py-8 flex justify-center">
                                    <button
                                        aria-label="Submit contact form"
                                        className="w-max rounded-full border-2 border-pink-600 bg-stone-900 px-4 py-2 text-2xl font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
                                        >
                                        Send Message
                                </button>
                                </div>
                        </form>                                                         
                    </div>
                </div>
                </Slide>
            </div>
        </section>
    );
};

export default Contact