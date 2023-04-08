import Head from 'next/head'
import React, { useState } from 'react'
import Header from "./Header";
import About from './About'
import Resume from './Resume'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="font-sans text-2xl subpixel-antialiased">
      <Head>
        <title>Kwonyoung Lee&apos;s Portfolio</title>
        <meta name="description" content="Kwonyoung Lee's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="smooth">
        <Header />
        <About />
        <Resume />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
