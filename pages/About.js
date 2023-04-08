import React from 'react'
import Bounce from 'react-reveal'


const About = () => {
    return (
    <section id="about">
      <div className="py-40 bg-[#000524]">
      <Bounce right>
          <div className="p-10 md:px-20 lg:max-w-7xl text-white container">
            <div>
              <h2 className="font-bold text-3xl py-2">About Me</h2>
              <p className="pt-3 pb-5 leading-loose">
                Hello, my name is Kwonyoung Lee and I am a passionate front-end developer and data analyst. 
                I am able to create visually engaging and user-friendly websites that are optimized 
                for a positive user experience. My attention to detail and understanding of 
                user behavior allow me to create interfaces that are effective and engaging.
                I am also skilled at gathering, cleaning, and analyzing data from various sources, 
                including databases. I am able to develop meaningful insights and recommendations
                based on my analysis that can inform business decisions and drive performance.
                
              </p>
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
                  <a href="Kwonyoung Lee.pdf" download="Kwonyoung Lee Resume.pdf">
                    <button className="bg-pink-600 hover:bg-purple-600 rounded-lg h-12 px-6 m-2">Download Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </Bounce>
      </div>
    </section>
    )
}

export default About