import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import VideoCarousel from './components/VideoCarousel'
import Features from './components/Feature'

function App() {

  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <VideoCarousel />
      <Features />
    </div>
  )
}

export default App
