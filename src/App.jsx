import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import VideoCarousel from './components/VideoCarousel'
import Features from './components/Feature'
import HowItWorks from './components/HowItWork'

function App() {

  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <VideoCarousel />
      <Features />
      <HowItWorks />
    </div>
  )
}

export default App
