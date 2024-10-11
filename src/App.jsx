import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import HeroText from './components/HeroText/HeroText.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'

function App() {

  return (
    <>
      <Header />
      <HeroText />
      <Hero />
      <About />
      <Experience />
      <Projects />
        
  
    </>
  )
}

export default App
