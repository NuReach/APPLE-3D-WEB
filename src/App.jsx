import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import VideoCarousel from './components/VideoCarousel'

function App() {

  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <VideoCarousel />
    </div>
  )
}

export default App
