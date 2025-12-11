import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import VideoPlayer from './components/videoplayer/VideoPlayer'
import { useState } from 'react'

const App = () => {

  const[playState,setPlayState]= useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subtitle="Our Programs" title="What We Offer"/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='TESTIMONIALS' title='What student Says'/>
      <Testimonials  />
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App