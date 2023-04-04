import React from 'react'

const About = () => {
    return (
    <section id="about" className='py-40 bg-[#000524]'>
          <div className="p-10 dark:bg-gray-900 md:px-20 lg:max-w-7xl text-white container">
            <div>
              <h2 className="font-bold text-3xl py-2">About Me</h2>
              <p className="pt-3 pb-5 leading-loose">Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
              <div>
                <div>
                  <h2 className="font-bold text-3xl py-2">Contact Details</h2>
                  <p className="pt-3 pb-5 leading-loose">
                    <span>Kwonyoung Lee</span>
                    <br />
                    <span>
                      4221 Old Denton Rd Apt 1304
                      <br />
                      Carrollton TX, 75010
                    </span>
                    <br />
                    <span>469-822-7472</span>
                    <br />
                    <span>kxl172130@utdallas.edu</span>
                  </p>
                </div>
                <div>
                  <p>
                    <button className="bg-red-800 hover:bg-pink-600 ...">Download Resume</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
    </section>
    )
}

export default About